---
title: A Curious Moon - Postgresql Course
date: '2023-07-29'
categories:
  - 'postgresql'
  - 'course'
  - 'docker'
excerpt: 'Working through the postgresql course'
---

Now this course looked like fun - [SQL Orbit / A Curious Moon](https://bigmachine.io/products/sql-orbit/##) working through the NASA data to learn some PostgreSQL? sounds very fun! 

## PostgreSQL Install

I like to work in containers as much as I can and I'm working with postgres more and more so put together a quick [template](https://github.com/jamesrbirch/postgres-docker-template).  Nothing fancy, just a pre-configured `docker-compose.yml` and some pre-setup folders.

Postgres and pgAdmin are installed and the folder are configured to setup pgAdmin with the details for the server and bind folders to the containers so we can persist data and import scripts and backups easily.

# A Curious Moon

## Extraction

Connect to the docker container
```shell
docker exec -it <container-name> /bin/bash
```

### Setting up the environment
We need to setup our dev environment with a few bash commands:

```shell
mkdir cassini
cd cassini
mkdir csvs
touch csvs/import.sql
touch README.md
createdb cassini
```

When connected to the docker environment I was connected as root rather then the user attached to the postgres instance so run
```shell
createdb cassini -U postgres
```

These commands will create our working directories and a document where we can log what we've done and why we did it.

To pull out the names of the columns in our CSV we use the head command:
```shell
head -1 csvs/master_plan.csv
```
This will display the first row of our CSV.

### Importing the data
When importing data into Postgres from a CSV, it's imperative that you do not try to alter the data - do that by explicitly transforming the data later on.

That means we need to import everything as text, because that's the core string type in Postgres (as opposed to varchar etc).

To create our schema and table:

```sql

create schema csvs;
create table csvs.master_plan(
  start_time_utc text,
  duration text,
  date text,
  team text,
  spass_type text,
  target text,
  request_name text,
  library_definition text,
  title text,
  description text
);
```

Copying data from a CSV into our new table:

```shell
copy csvs.master_plan 
from '[Absolute path to]/csvs/master_plan.csv'
delimiter ',' header csv;
```

### Reviewing the data

Postgres ships with a powerful binary client, psql. 

You can login to your database with a simple command:

```shell
psql cassini
```

Once you're in, you can have a look around and see what's there:

```shell
\d
\d csvs.*
```

If you run a query on our master_plan table, you'll quickly find the results unreadable, which means we should use expanded display using \x - and sometimes that doesn't even help!

Specify what you want to see and limit the results.

```shell
select start_time_utc, duration, date from csvs.master_plan limit 5;
```

There is a simplified web-based GUI, you can run PG Web using Docker:

```shell
pgweb:
  container_name: pgweb
  restart: always
  image: sosedoff/pgweb
  ports:
    - "8080:8081"
  environment:
    - DATABASE_URL=postgres://rob@host.docker.internal/cassini?sslmode=disable
```

### Working with dates

Dates and timestamps are core to working with data as you will often find that if you don't know precisely WHEN something happened, it will become meaningless. Dates mark changes over time - those changes will often drive business decisions, so you better be correct!

Bottom line: never trust a spreadsheet, especially when it comes to dates.

Postgres is pretty good at dealing with dates... in fact it's amazingly powerful as well as correct:

```sql
select now(); -- what date and time is it where my server is located?
select now() + '1 day' as tomorrow; -- adding an interval is extremely easy
select now() at time zone 'America/New_York'; -- specifying a timezone
```

If you're reading this in a browser, which I assume you are, open up the developer tools using CMD-shift-i (or Ctrl-shift-i on Windows) and open the console.

To see a typical date for JavaScript (and many other languages):

```js
new Date() //prints out a long-form date
```

To see an ISO date, which most databases like, you can use:

```js
new Date().toISOString();
```

This is a format you should let your eyes get used to.

### Validating the Data
The data in our mission plan looks straightforward but since it's a plan that is based on dates, we need to jump right into validating those dates. Thankfully for us, Postgres is outstanding at date and time functionality!

The date information in our imported data looks a little strange, with a timestamp that's formatted as year-dayofyear, a duration, and a weird column named date that's formatted in a pretty simplistic way.

We can validate that the timestamp format won't cause problems by running a simple query, casting it to an ISO string:

```sql
select start_time_utc::timestamp from csvs.master_plan;
```

That will throw if the conversion won't work.

You can reconcile two fields of data by running a simple comparison. The trick, however, is to be sure they're the same type, and we can do that by casting (::) both to a date:

```sql
select start_time_utc from csvs.master_plan
where start_time_utc::date <> date::date;
```

### Creating a reusable Import script

We don't like errors when running our imports and, unfortunately since we're human, we're going to have a lot of them. Instead of fixing things piecemeal, it's always better to just rerun everything.

If we try to run our import script twice we're going to get an error because the schema already exists - as does our table. We could check to see if these things exist first, but it's much easier just to hose everything and rerun.

To do that, we need to drop everything first. We can also avoid errors by ensuring the `drop`` only happens if the schema exists first:

```sql
drop schema if exists csvs cascade;
```

That cascade keyword will drop the target object and all dependent objects on it.

### Summary

#### Shell scripts
| Command      | Description |
| ----------- | ----------- |
| mkdir      | Create a directory       |
| touch   | Create a file OR update it's modified time        |
| cd | Change directory |
| head | Examine the top N lines of a file |

#### PostgreSQL Tools
| Command      | Description |
| ----------- | ----------- |
| createdb      | Create a database |
| dropdb   | Drop a database |
| psql | Open the PostgreSQL client |
| head | Examine the top N lines of a file |

#### SQL
| Command | Description |
| ----------- | ----------- |
| start_time_utc::date | Casting with PostgreSQL types |
| copy from | Pulling data from a file |
| create schema, table | Creating a table |
| drop schema, table | Remove an object from the database |


## Transformation

We have our tools and our initial extraction ready to go, now let's get to work finding the flybys of Enceladus! In this section we'll focus on transforming this data into something we can query with some degree of confidence and then, hopefully, we'll find the exact time windows for the flybys.

The data is loaded up, now let's roll up our DBA sleeves and get to work! We'll start by creating a workspace:

```shell
mkdir enceladus
touch enceladus/load.sql
```

### Examining the data

Before we can normalize the mission plan data, we need to understand what's in the table and how it's related.

To see a description of a table in Postgres, we use the "describe" command followed by the object we want described: `\d csvs.master_plan`.

We're trying to isolate the Enceladus plan data, so for that we can use a simple `select` statement with a `where` clause. There's a lot of data in there and we don't want it all back, so we can limit the result using `limit`:

```sql
select team, spass_type, target 
from csvs.master_plan 
where target='Enceladus' limit 10;
```

This equality predicate (`where target='Enceladus'`) is case sensitive and very strict - it has to be an exact match. We'd like a more "fuzzy" search, so we can use a matching regular expression in our predicate with the `~*` operator:

```sql
select team, spass_type, target 
from csvs.master_plan 
where target ~* 'Enceladus' limit 10;
```

That's a case insensitive match. If we wanted a case sensitive matching expression we could use ~:

```sql
select team, spass_type, target 
from csvs.master_plan 
where target ~ 'Enceladus' limit 10;
```

Many times you'll want to isolate the distinct values of a column. This can be to check if there are spelling/casing issues OR to isolate data in order to create a separate table. You can do this using `distinct`:

```sql
select distinct target from csvs.master_plan order by target;
```

To figure out how many total records we have matching our `where` predicate we can use `count`:

```sql
select count(1) from csvs.master_plan where target ~* 'Enceladus';
```

You can make your `where` predicate more exclusive by adding `and`. This query is using the Postgres case-insensitive "fuzzy" keyword `ilike`, which accepts a wildcard `%` that says "show me all the rows where the target is Enceladus and the title starts with the characters `flyby`:

```sql
select start_time_utc, title 
from csvs.master_plan where target='Enceladus'
AND title ilike 'flyby%';
```

We want something a little more fuzzy, however, because we don't know if the title will actually start with the term `flyby` - that means we want something that contains the word `flyby`. We can, once again, use a regular expression for this, without the wildcard:

```sql
select start_time_utc, title 
from csvs.master_plan where target='Enceladus'
AND title ~* 'flyby';
```

### Isolating the Enceladus Data

Our inspection showed us how we can isolate the Enceladus data - now let's do it!

We'll start by creating a script to transform the imported data into something we can analyze later on. For that, we'll use bash:

```shell
mkdir enceladus #if you haven't already
touch enceladus/transform.sql
```

Once again, we'll create a schema to work in, but this time we'll ensure the script is idempotent from the start. As a convenience, we'll tell Postgres that every bit of SQL that's to come is to be run in the `enceladus` schema. We can do that by setting the `search_path`:

```sql
drop schema if exists enceladus cascade;
create schema enceladus;
set search_path='enceladus';
```

Creating our `teams` and `plans` table, which are related by a foreign key, which is the `team_id` in the plans table. It `references` the `id` of the `teams` table. We specify that using the keyword `references`:

```sql
drop schema if exists enceladus cascade;
create schema enceladus;
set search_path='enceladus';

create table teams(
  id serial primary key,
  name text not null
);

create table plans(
  id serial primary key,
  start timestamp not null,
  title text not null,
  team_id int not null references teams(id),
  description text
);
```

Now we need to add some data and we can do that using a new SQL friend, `insert`. You can `insert` data in two ways: using the results of a query or by creating a set of hard-coded values. We'll use a query:

```sql
insert into teams(name)
select distinct team from csvs.master_plan;

insert into plans(start, title, team_id, description)
select 
  start_time_utc::timestamp,
  title,
  (select id from teams where name=csvs.master_plan.team),
  description
from csvs.master_plan
where target='Enceladus' and title is not null;
```

We can concatenate multiple files into 1:
```shell
cat *.csv >> all.csv
```

### Transformation

The INMS CSV is loaded, now we need to create our analysis table using the full power of PostgreSQL - specifically strong data types with appropriate constraints.

Let's impose some typing and rules for the incoming data so that we can rely on it in our analysis:

```sql
drop schema if exists enceladus cascade;

create schema enceladus;

set search_path='enceladus';

create table inms(
  id bigserial primary key,
  created_at timestamp not null,
  altitude numeric(9,2) not null check(altitude > 0),
  source text not null check(source in('osi','csn','osnb','osnt'))
  mass numeric(6,3) not null check(mass >=0.125 and mass < 100),
  high_sensitivity_count int not null check(high_sensitivity_count > 0),
  low_sensitivity_count int not null check(low_sensitivity_count > 0)
);

```

### Constraints

Constraints are guards for your table.  Every constraint must be satisfied for all the data in a transaction before it is written.

Timestamping when data has been created or updated is a regular occurrence in the developer world and if you're working with Postgres, the definition is simple:

```sql
create table products(
  --...
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

When preparing data for analysis, it's common to denormalize it in order to speed up the analysis process. It's common to see data pre-calculated and stored, especially if its historical data like ours is. I'm doing exactly this by creating a date and year field.

Postgres makes this simple by offering generated fields:

```sql
create table inms(
  id serial primary key,
  created_at timestamp not null,
  date date not null generated always as (created_at::date) stored,
  year int not null generated always as (date_part('year', created_at)) stored,
  --...
);
```

Whenever the created_at data changes, so will date and year because these are virtual columns that can't be changed directly.

Here's the entire table definition:

```sql
drop schema if exists enceladus cascade;
create schema enceladus;
set search_path='enceladus';

create table inms(
  id serial primary key,
  created_at timestamp not null,
  date date not null generated always as (created_at::date) stored,
  year int not null generated always as (date_part('year', created_at)) stored,
  flyby_id int references flybys(id),
  altitude numeric(9,2) not null check(altitude > 0),
  source text not null check(source in('osi','csn','osnb','osnt')),
  mass numeric(6,3) not null check(mass >=0.125 and mass < 100),
  high_sensitivity_count int not null check(high_sensitivity_count > 0),
  low_sensitivity_count int not null check(low_sensitivity_count > 0),
  imported_at timestamptz not null default now()
);
```

To insert data into this table we need to execute an insert statement (which is going to fail, but that's OK it's kind of in the plan). Notice that I don't need to insert all of the fields - the generated bits take care of themselves, as does the imported_at timestamp due to its default:

```sql
insert into inms(
  created_at, 
  altitude, 
  source, 
  mass, 
  high_sensitivity_count,
  low_sensitivity_count
)
select
  sclk::timestamp,
  alt_t::numeric(9,2),
  source,
  mass_per_charge::numeric(6,3),
  c1counts::int,
  c1counts::int
from csvs.inms
where target='ENCELADUS';
```

### Listing tables in psql
To show the current search path you can use the following command:

`SHOW search_path;`

And to put the new schema in the path, you could use:

`SET search_path TO myschema;`

Or if you want multiple schemas:

`SET search_path TO myschema, public;`

This allows the command to default to that set schema.

## Analysis

### Spreadsheet export

We've been asked to assemble two queries for export: the chemical data gathered per flyby and the chemical data found over the entirety of the Cassini mission. We can do that using these queries:

```sql
set search_path='enceladus';
select flybys.name as flyby,
    inms.date,
    inms.source,
    chemistry.name as compound,
    chemistry.formula,
    sum(inms.high_sensitivity_count) as sum_high,
    sum(inms.low_sensitivity_count) as sum_low
from flybys
inner join inms on flyby_id = flybys.id
inner join chemistry on chemistry.molecular_weight = inms.mass
group by flybys.name, inms.date, inms.source, chemistry.name, chemistry.formula;
```

To speed things up (and uncramp our fingers) we'll create a materialized view. Notice how I'm dropping the view if it exists and then recreating it directly. This keeps our script idempotent, which is required:

```sql
set search_path='enceladus';
drop materialized view if exists results_per_flyby;
create materialized view results_per_flyby as
select flybys.name,
  flybys.date,
  inms.source,
  chemistry.name as compound,
  chemistry.formula,
  sum(inms.high_sensitivity_count) as sum_high,
  sum(inms.low_sensitivity_count) as sum_low
from flybys
inner join inms on flyby_id = flybys.id
inner join chemistry on chemistry.molecular_weight = inms.mass
group by flybys.name, flybys.date, inms.source, chemistry.name, chemistry.formula
order by flybys.date;
```

The overall query is a bit simpler as all we need to do is remove the flybys table from the select, join and group by list:

```sql
select
  inms.source,
  chemistry.name as compound,
  chemistry.formula,
  sum(inms.high_sensitivity_count) as sum_high,
  sum(inms.low_sensitivity_count) as sum_low
from flybys
inner join inms on flyby_id = flybys.id
inner join chemistry on chemistry.molecular_weight = inms.mass
group by inms.source, chemistry.name, chemistry.formula)
```

### Exporting the data

Our analysts are going to be using Excel to dig into the data so let's setup a simple way to get it to them. We can run a script for this or we can use psql:

```shell
psql cassini -c "\copy (select * from enceladus.results_per_flyby) to '//FILESHARE/results_per_flyby.csv' header csv;
```

Running a SQL script can be easier, and also a bit more flexible. The first command will output the results of our analysis view (rollups by flyby). The second will dump the overall result:

```sql
set search_path='enceladus';
copy (select * from enceladus.results_per_flyby) 
to '//share/results_per_flyby.csv' header csv;

copy (select
  inms.source,
  chemistry.name as compound,
  chemistry.formula,
  sum(inms.high_sensitivity_count) as sum_high,
  sum(inms.low_sensitivity_count) as sum_low
from flybys
inner join inms on flyby_id = flybys.id
inner join chemistry on chemistry.molecular_weight = inms.mass
group by inms.source, chemistry.name, chemistry.formula)
to '//share/overall_results.csv' header csv;
```

