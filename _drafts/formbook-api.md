SportingLife / RacingPost

Get meeting page
Download html
Process html for links

Go through each meeting
Download html
Process html for data

Goto URL
Save raw html to process folder

Process items in process folder
Extract data
Save data
Add items to queue

Use data to check all items have been downloaded
Save data to db?
Requeue items

Make data available via API
Auth0 / Account
Cache data?

I was thinking you’d need some kind of verification process.
Perhaps once the data is in tables,
there could be a count of each meeting
race and runner
plus a count of horses with comments

As long as the comment count for a race is not zero then that should be fine as they tend to load each race all at once. However, to make doubly sure, the count of comments could match the runners. The only caveat is non runners won’t have comments.

I’ve run the scraper before now and it’s missed entire races. So perhaps once the data is in, it uses the totals to do the sanity check. It could re-read the main racecards page, which has a count of races on it. Perhaps it then wipes and rescrapes the meeting until the numbers match?

Maybe with an email to us if it fails to match things after 5 attempts or something?

If you also scrape the odds then that data could be used to verify the number of runners are correct? Perhaps even the number of meetings and races? At least then you’re using 2 different sources. Equally that’s twice the headache for if (when) one of them changes their page layouts.

Missing standard times is no massive issue as whatever admin panel we put in place should be able to handle/identify that. As it’s from the results file It’s not like the data can never be scraped again (like the racecard data) so that’s not really much of an issue. The biggest pain is if we ever miss racecard stuff.

Yet another option would be to also scrape the racecard data from somewhere like sportinglife - that way verification should be easier and any blanks could be filled reasonably easily.
Interestingly (or annoyingly depending on your outlook) racing post have recently missed headgear off from some horses (including Hachert in June) - the RP comment in his next race even mentioned the “return of headgear” even though he’s never run without it.
So being able to fill omissions like that would be good and could only be done with 2 sources.

Some brain food for ya ;-)
