import{S as ao,i as no,s as ro,k as i,q as p,a as r,l as a,m as n,r as u,h as t,c as f,n as m,b as s,C as o,B as ql}from"./index-dc704e0c.js";function fo(qs){let w,St,Te,R,Lt,Re,A,xt,Ae,O,Ht,Oe,d,he,Bt,Mt,ve,Ut,Tt,me,Rt,At,de,Ot,We,W,Wt,Fe,F,Ft,Ce,C,Ct,qe,q,qt,De,D,Dt,je,j,jt,ze,E,ce,zt,Gt,we,Nt,Ge,z,Ee,_e,Yt,Ne,G,Kt,Ye,N,Qt,Ke,h,ye,Jt,Vt,Ie,Xt,Zt,be,$t,gt,Y,el,c,ke,tl,ll,Pe,sl,ol,Se,il,al,Le,nl,rl,xe,fl,pl,He,ul,hl,Be,vl,ml,Me,dl,Qe,K,cl,Je,Q,wl,Ve,J,I,El,Xe,V,_l,Ze,b,Ds='<code class="language-shell"><span class="token function">ssh</span> <span class="token number">192.168</span>.1.81</code>',$e,X,yl,ge,Z,Il,et,$,k,bl,tt,g,kl,lt,P,js='<code class="language-shell"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">unzip</span></code>',st,ee,Pl,ot,te,Sl,it,S,zs='<code class="language-shell"><span class="token function">chmod</span> <span class="token number">666</span> ~/.poshthemes/*.json</code>',at,le,Ll,nt,se,xl,rt,oe,Hl,ft,L,Gs='<code class="language-shell"><span class="token function">ip</span> addr show</code>',pt,ie,Bl,ut,x,Ns='<code class="language-shell"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/netplan/00-installer-config.yaml</code>',ht,ae,Ml,vt,H,Ys=`<code class="language-undefined"># This file describes the network interfaces available on your system
# For more information, see netplan(5).
network:
  version: 2
  renderer: networkd
  ethernets:
    wlp8s0:
      dhcp4: no
      dhcp6: no
      addresses: [192.168.1.81/24]
      gateway4: 192.168.1.1
      nameservers:
        addresses: [1.1.1.1,8.8.8.8]</code>`,mt,ne,Ul,dt,B,Ks='<code class="language-undefined">sudo netplan apply</code>',ct,re,Tl,wt,_,Rl,Ue,Al,Ol,Et,M,Qs='<code class="language-shell"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/systemd/logind.conf</code>',_t,fe,Wl,yt,U,Js='<code class="language-undefined">HandleLidSwitch=ignore</code>',It,pe,Fl,bt,T,Vs='<code class="language-shell"><span class="token function">sudo</span> <span class="token function">service</span> systemd-logind restart</code>';return{c(){w=i("p"),St=p("I had some spare time this weekend and decided it was time to dust off the old laptop I had in a draw and see what we can use it for. It\u2019s a HP Envy 4 core / 8 thread 12Gb Ram machine so it\u2019s perfect for firing up some semi-permanent test / dev / \u201CI\u2019m making this for my fi\xE1nce\u201D projects."),Te=r(),R=i("h2"),Lt=p("\u{1F4DC} The plan"),Re=r(),A=i("p"),xt=p("The idea of having a Docker platform with enough power to run multiple (read MANY) things for the house is a very attractive idea."),Ae=r(),O=i("p"),Ht=p("As an aside there are a lot of other bonuses:"),Oe=r(),d=i("ul"),he=i("li"),Bt=p("Improve my command line competence"),Mt=r(),ve=i("li"),Ut=p("Become familiar with Linux"),Tt=r(),me=i("li"),Rt=p("Learn new technology"),At=r(),de=i("li"),Ot=p("Revive a laptop"),We=r(),W=i("h2"),Wt=p("\u{1F913} Linux"),Fe=r(),F=i("p"),Ft=p("This particular model of the Envy is notorious for having really bad cooling, running Windows 10 this had 70-80 celsius cpu cores temperatures downloading a Windows update. I did a clean of the fan and general case clean, I should have replaced the thermal paste as well but I didn\u2019t have any to hand."),Ce=r(),C=i("p"),Ct=p("So! Linux time.. hopefully that will be a little nicer to our old girl. It also gives me an excuse to try using linux to achieve a goal, instead of giving up with it after an hour or two as I have done in the past."),qe=r(),q=i("h3"),qt=p("\u{1F4BE} Installation"),De=r(),D=i("p"),Dt=p("Installing linux is fairly straight forward."),je=r(),j=i("p"),jt=p("Requirements:"),ze=r(),E=i("ul"),ce=i("li"),zt=p("Make a bootable USB with Ubuntu on (other flavours are available)"),Gt=r(),we=i("li"),Nt=p("Make sure your machine can boot from a USB"),Ge=r(),z=i("blockquote"),Ee=i("p"),_e=i("em"),Yt=p("If you are installing a dual boot partition go into the Windows Disk Manager and resize your hard drive there. I\u2019ve broken more than one laptop install by trying to do this in the linux installer!"),Ne=r(),G=i("h3"),Kt=p("\u{1F97E} Boot it!"),Ye=r(),N=i("p"),Qt=p("Alter the bios to boot from the USB, I needed to jump through a few hoops with the HP Envy bios."),Ke=r(),h=i("ol"),ye=i("li"),Jt=p("Have the Ubuntu USB drive prepared and in the USB port then turn on the computer"),Vt=r(),Ie=i("li"),Xt=p("As soon as the laptop is on keep pressing the Escape key which will present a start up menu"),Zt=r(),be=i("li"),$t=p("Press F10 to go into the BIOS"),gt=r(),Y=i("li"),el=p("In the Boot Menu make sure:"),c=i("ul"),ke=i("li"),tl=p("Secure boot is disabled"),ll=r(),Pe=i("li"),sl=p("Legacy Support is enabled"),ol=r(),Se=i("li"),il=p("In System Configuration set USB3.0 Config in Pre-Boot is Auto"),al=r(),Le=i("li"),nl=p("F10 to Save and Restart"),rl=r(),xe=i("li"),fl=p("Press Escape repeatedly once the system has restarted to get back to the start up menu"),pl=r(),He=i("li"),ul=p("Press F9 to open the Boot Device menu"),hl=r(),Be=i("li"),vl=p("Select USB drive to boot from"),ml=r(),Me=i("li"),dl=p("Follow the installation steps"),Qe=r(),K=i("h2"),cl=p("\u{1F92B} SSH"),Je=r(),Q=i("p"),wl=p("We can remote onto linux and execute commands by using ssh. We first need to configure an ssh server on the linux machine."),Ve=r(),J=i("p"),I=i("a"),El=p("Configure SSH"),Xe=r(),V=i("p"),_l=p("Once setup we can"),Ze=r(),b=i("pre"),$e=r(),X=i("h2"),yl=p("\u{1F3C6} Bonus: A nice theme"),ge=r(),Z=i("p"),Il=p("A new combined shell is Oh My Posh 3. Giving a common experience across all shells now, I like it! Let\u2019s give it a go!"),et=r(),$=i("p"),k=i("a"),bl=p("Oh My Posh - Installation"),tt=r(),g=i("p"),kl=p("If you\u2019ve installed a basic version of Ubuntu you might need the unzip command:"),lt=r(),P=i("pre"),st=r(),ee=i("p"),Pl=p("The only thing I\u2019ve found with that guide is setting the permissions of the config files wasn\u2019t working as I had to sudo the previous commands to install the needed files. I\u2019ll need to look into this further."),ot=r(),te=i("p"),Sl=p("So.."),it=r(),S=i("pre"),at=r(),le=i("p"),Ll=p("\u{1F62C}"),nt=r(),se=i("h2"),xl=p("\u{1F3E0} Set up a static IP address"),rt=r(),oe=i("p"),Hl=p("First we need to get the network name:"),ft=r(),L=i("pre"),pt=r(),ie=i("p"),Bl=p("We can use Netplan to configure a static IP address configuration. The default configuration file is /etc/netplan/01-netcfg.yaml."),ut=r(),x=i("pre"),ht=r(),ae=i("p"),Ml=p("Enter the ip details you want:"),vt=r(),H=i("pre"),mt=r(),ne=i("p"),Ul=p("Save the file and apply the changes:"),dt=r(),B=i("pre"),ct=r(),re=i("h2"),Tl=p("\u{1F4BB} Make sure the laptop doesn\u2019t turn off when the lid is closed."),wt=r(),_=i("p"),Rl=p("Open the "),Ue=i("code"),Al=p("/etc/systemd/logind.conf"),Ol=p(" file in a text editor as root, for example,"),Et=r(),M=i("pre"),_t=r(),fe=i("p"),Wl=p("Set HandleLidSwitch to ignore:"),yt=r(),U=i("pre"),It=r(),pe=i("p"),Fl=p("Restart the systemd daemon :"),bt=r(),T=i("pre"),this.h()},l(e){w=a(e,"P",{});var l=n(w);St=u(l,"I had some spare time this weekend and decided it was time to dust off the old laptop I had in a draw and see what we can use it for. It\u2019s a HP Envy 4 core / 8 thread 12Gb Ram machine so it\u2019s perfect for firing up some semi-permanent test / dev / \u201CI\u2019m making this for my fi\xE1nce\u201D projects."),l.forEach(t),Te=f(e),R=a(e,"H2",{});var Dl=n(R);Lt=u(Dl,"\u{1F4DC} The plan"),Dl.forEach(t),Re=f(e),A=a(e,"P",{});var jl=n(A);xt=u(jl,"The idea of having a Docker platform with enough power to run multiple (read MANY) things for the house is a very attractive idea."),jl.forEach(t),Ae=f(e),O=a(e,"P",{});var zl=n(O);Ht=u(zl,"As an aside there are a lot of other bonuses:"),zl.forEach(t),Oe=f(e),d=a(e,"UL",{});var y=n(d);he=a(y,"LI",{});var Gl=n(he);Bt=u(Gl,"Improve my command line competence"),Gl.forEach(t),Mt=f(y),ve=a(y,"LI",{});var Nl=n(ve);Ut=u(Nl,"Become familiar with Linux"),Nl.forEach(t),Tt=f(y),me=a(y,"LI",{});var Yl=n(me);Rt=u(Yl,"Learn new technology"),Yl.forEach(t),At=f(y),de=a(y,"LI",{});var Kl=n(de);Ot=u(Kl,"Revive a laptop"),Kl.forEach(t),y.forEach(t),We=f(e),W=a(e,"H2",{});var Ql=n(W);Wt=u(Ql,"\u{1F913} Linux"),Ql.forEach(t),Fe=f(e),F=a(e,"P",{});var Jl=n(F);Ft=u(Jl,"This particular model of the Envy is notorious for having really bad cooling, running Windows 10 this had 70-80 celsius cpu cores temperatures downloading a Windows update. I did a clean of the fan and general case clean, I should have replaced the thermal paste as well but I didn\u2019t have any to hand."),Jl.forEach(t),Ce=f(e),C=a(e,"P",{});var Vl=n(C);Ct=u(Vl,"So! Linux time.. hopefully that will be a little nicer to our old girl. It also gives me an excuse to try using linux to achieve a goal, instead of giving up with it after an hour or two as I have done in the past."),Vl.forEach(t),qe=f(e),q=a(e,"H3",{});var Xl=n(q);qt=u(Xl,"\u{1F4BE} Installation"),Xl.forEach(t),De=f(e),D=a(e,"P",{});var Zl=n(D);Dt=u(Zl,"Installing linux is fairly straight forward."),Zl.forEach(t),je=f(e),j=a(e,"P",{});var $l=n(j);jt=u($l,"Requirements:"),$l.forEach(t),ze=f(e),E=a(e,"UL",{});var kt=n(E);ce=a(kt,"LI",{});var gl=n(ce);zt=u(gl,"Make a bootable USB with Ubuntu on (other flavours are available)"),gl.forEach(t),Gt=f(kt),we=a(kt,"LI",{});var es=n(we);Nt=u(es,"Make sure your machine can boot from a USB"),es.forEach(t),kt.forEach(t),Ge=f(e),z=a(e,"BLOCKQUOTE",{});var ts=n(z);Ee=a(ts,"P",{});var ls=n(Ee);_e=a(ls,"EM",{});var ss=n(_e);Yt=u(ss,"If you are installing a dual boot partition go into the Windows Disk Manager and resize your hard drive there. I\u2019ve broken more than one laptop install by trying to do this in the linux installer!"),ss.forEach(t),ls.forEach(t),ts.forEach(t),Ne=f(e),G=a(e,"H3",{});var os=n(G);Kt=u(os,"\u{1F97E} Boot it!"),os.forEach(t),Ye=f(e),N=a(e,"P",{});var is=n(N);Qt=u(is,"Alter the bios to boot from the USB, I needed to jump through a few hoops with the HP Envy bios."),is.forEach(t),Ke=f(e),h=a(e,"OL",{});var v=n(h);ye=a(v,"LI",{});var as=n(ye);Jt=u(as,"Have the Ubuntu USB drive prepared and in the USB port then turn on the computer"),as.forEach(t),Vt=f(v),Ie=a(v,"LI",{});var ns=n(Ie);Xt=u(ns,"As soon as the laptop is on keep pressing the Escape key which will present a start up menu"),ns.forEach(t),Zt=f(v),be=a(v,"LI",{});var rs=n(be);$t=u(rs,"Press F10 to go into the BIOS"),rs.forEach(t),gt=f(v),Y=a(v,"LI",{});var Cl=n(Y);el=u(Cl,"In the Boot Menu make sure:"),c=a(Cl,"UL",{});var ue=n(c);ke=a(ue,"LI",{});var fs=n(ke);tl=u(fs,"Secure boot is disabled"),fs.forEach(t),ll=f(ue),Pe=a(ue,"LI",{});var ps=n(Pe);sl=u(ps,"Legacy Support is enabled"),ps.forEach(t),ol=f(ue),Se=a(ue,"LI",{});var us=n(Se);il=u(us,"In System Configuration set USB3.0 Config in Pre-Boot is Auto"),us.forEach(t),ue.forEach(t),Cl.forEach(t),al=f(v),Le=a(v,"LI",{});var hs=n(Le);nl=u(hs,"F10 to Save and Restart"),hs.forEach(t),rl=f(v),xe=a(v,"LI",{});var vs=n(xe);fl=u(vs,"Press Escape repeatedly once the system has restarted to get back to the start up menu"),vs.forEach(t),pl=f(v),He=a(v,"LI",{});var ms=n(He);ul=u(ms,"Press F9 to open the Boot Device menu"),ms.forEach(t),hl=f(v),Be=a(v,"LI",{});var ds=n(Be);vl=u(ds,"Select USB drive to boot from"),ds.forEach(t),ml=f(v),Me=a(v,"LI",{});var cs=n(Me);dl=u(cs,"Follow the installation steps"),cs.forEach(t),v.forEach(t),Qe=f(e),K=a(e,"H2",{});var ws=n(K);cl=u(ws,"\u{1F92B} SSH"),ws.forEach(t),Je=f(e),Q=a(e,"P",{});var Es=n(Q);wl=u(Es,"We can remote onto linux and execute commands by using ssh. We first need to configure an ssh server on the linux machine."),Es.forEach(t),Ve=f(e),J=a(e,"P",{});var _s=n(J);I=a(_s,"A",{href:!0,rel:!0});var ys=n(I);El=u(ys,"Configure SSH"),ys.forEach(t),_s.forEach(t),Xe=f(e),V=a(e,"P",{});var Is=n(V);_l=u(Is,"Once setup we can"),Is.forEach(t),Ze=f(e),b=a(e,"PRE",{class:!0});var Xs=n(b);Xs.forEach(t),$e=f(e),X=a(e,"H2",{});var bs=n(X);yl=u(bs,"\u{1F3C6} Bonus: A nice theme"),bs.forEach(t),ge=f(e),Z=a(e,"P",{});var ks=n(Z);Il=u(ks,"A new combined shell is Oh My Posh 3. Giving a common experience across all shells now, I like it! Let\u2019s give it a go!"),ks.forEach(t),et=f(e),$=a(e,"P",{});var Ps=n($);k=a(Ps,"A",{href:!0,rel:!0});var Ss=n(k);bl=u(Ss,"Oh My Posh - Installation"),Ss.forEach(t),Ps.forEach(t),tt=f(e),g=a(e,"P",{});var Ls=n(g);kl=u(Ls,"If you\u2019ve installed a basic version of Ubuntu you might need the unzip command:"),Ls.forEach(t),lt=f(e),P=a(e,"PRE",{class:!0});var Zs=n(P);Zs.forEach(t),st=f(e),ee=a(e,"P",{});var xs=n(ee);Pl=u(xs,"The only thing I\u2019ve found with that guide is setting the permissions of the config files wasn\u2019t working as I had to sudo the previous commands to install the needed files. I\u2019ll need to look into this further."),xs.forEach(t),ot=f(e),te=a(e,"P",{});var Hs=n(te);Sl=u(Hs,"So.."),Hs.forEach(t),it=f(e),S=a(e,"PRE",{class:!0});var $s=n(S);$s.forEach(t),at=f(e),le=a(e,"P",{});var Bs=n(le);Ll=u(Bs,"\u{1F62C}"),Bs.forEach(t),nt=f(e),se=a(e,"H2",{});var Ms=n(se);xl=u(Ms,"\u{1F3E0} Set up a static IP address"),Ms.forEach(t),rt=f(e),oe=a(e,"P",{});var Us=n(oe);Hl=u(Us,"First we need to get the network name:"),Us.forEach(t),ft=f(e),L=a(e,"PRE",{class:!0});var gs=n(L);gs.forEach(t),pt=f(e),ie=a(e,"P",{});var Ts=n(ie);Bl=u(Ts,"We can use Netplan to configure a static IP address configuration. The default configuration file is /etc/netplan/01-netcfg.yaml."),Ts.forEach(t),ut=f(e),x=a(e,"PRE",{class:!0});var eo=n(x);eo.forEach(t),ht=f(e),ae=a(e,"P",{});var Rs=n(ae);Ml=u(Rs,"Enter the ip details you want:"),Rs.forEach(t),vt=f(e),H=a(e,"PRE",{class:!0});var to=n(H);to.forEach(t),mt=f(e),ne=a(e,"P",{});var As=n(ne);Ul=u(As,"Save the file and apply the changes:"),As.forEach(t),dt=f(e),B=a(e,"PRE",{class:!0});var lo=n(B);lo.forEach(t),ct=f(e),re=a(e,"H2",{});var Os=n(re);Tl=u(Os,"\u{1F4BB} Make sure the laptop doesn\u2019t turn off when the lid is closed."),Os.forEach(t),wt=f(e),_=a(e,"P",{});var Pt=n(_);Rl=u(Pt,"Open the "),Ue=a(Pt,"CODE",{});var Ws=n(Ue);Al=u(Ws,"/etc/systemd/logind.conf"),Ws.forEach(t),Ol=u(Pt," file in a text editor as root, for example,"),Pt.forEach(t),Et=f(e),M=a(e,"PRE",{class:!0});var so=n(M);so.forEach(t),_t=f(e),fe=a(e,"P",{});var Fs=n(fe);Wl=u(Fs,"Set HandleLidSwitch to ignore:"),Fs.forEach(t),yt=f(e),U=a(e,"PRE",{class:!0});var oo=n(U);oo.forEach(t),It=f(e),pe=a(e,"P",{});var Cs=n(pe);Fl=u(Cs,"Restart the systemd daemon :"),Cs.forEach(t),bt=f(e),T=a(e,"PRE",{class:!0});var io=n(T);io.forEach(t),this.h()},h(){m(I,"href","https://vitux.com/how-to-remotely-manage-a-ubuntu-server-with-ssh/"),m(I,"rel","nofollow"),m(b,"class","language-shell"),m(k,"href","https://ohmyposh.dev/docs/installation"),m(k,"rel","nofollow"),m(P,"class","language-shell"),m(S,"class","language-shell"),m(L,"class","language-shell"),m(x,"class","language-shell"),m(H,"class","language-undefined"),m(B,"class","language-undefined"),m(M,"class","language-shell"),m(U,"class","language-undefined"),m(T,"class","language-shell")},m(e,l){s(e,w,l),o(w,St),s(e,Te,l),s(e,R,l),o(R,Lt),s(e,Re,l),s(e,A,l),o(A,xt),s(e,Ae,l),s(e,O,l),o(O,Ht),s(e,Oe,l),s(e,d,l),o(d,he),o(he,Bt),o(d,Mt),o(d,ve),o(ve,Ut),o(d,Tt),o(d,me),o(me,Rt),o(d,At),o(d,de),o(de,Ot),s(e,We,l),s(e,W,l),o(W,Wt),s(e,Fe,l),s(e,F,l),o(F,Ft),s(e,Ce,l),s(e,C,l),o(C,Ct),s(e,qe,l),s(e,q,l),o(q,qt),s(e,De,l),s(e,D,l),o(D,Dt),s(e,je,l),s(e,j,l),o(j,jt),s(e,ze,l),s(e,E,l),o(E,ce),o(ce,zt),o(E,Gt),o(E,we),o(we,Nt),s(e,Ge,l),s(e,z,l),o(z,Ee),o(Ee,_e),o(_e,Yt),s(e,Ne,l),s(e,G,l),o(G,Kt),s(e,Ye,l),s(e,N,l),o(N,Qt),s(e,Ke,l),s(e,h,l),o(h,ye),o(ye,Jt),o(h,Vt),o(h,Ie),o(Ie,Xt),o(h,Zt),o(h,be),o(be,$t),o(h,gt),o(h,Y),o(Y,el),o(Y,c),o(c,ke),o(ke,tl),o(c,ll),o(c,Pe),o(Pe,sl),o(c,ol),o(c,Se),o(Se,il),o(h,al),o(h,Le),o(Le,nl),o(h,rl),o(h,xe),o(xe,fl),o(h,pl),o(h,He),o(He,ul),o(h,hl),o(h,Be),o(Be,vl),o(h,ml),o(h,Me),o(Me,dl),s(e,Qe,l),s(e,K,l),o(K,cl),s(e,Je,l),s(e,Q,l),o(Q,wl),s(e,Ve,l),s(e,J,l),o(J,I),o(I,El),s(e,Xe,l),s(e,V,l),o(V,_l),s(e,Ze,l),s(e,b,l),b.innerHTML=Ds,s(e,$e,l),s(e,X,l),o(X,yl),s(e,ge,l),s(e,Z,l),o(Z,Il),s(e,et,l),s(e,$,l),o($,k),o(k,bl),s(e,tt,l),s(e,g,l),o(g,kl),s(e,lt,l),s(e,P,l),P.innerHTML=js,s(e,st,l),s(e,ee,l),o(ee,Pl),s(e,ot,l),s(e,te,l),o(te,Sl),s(e,it,l),s(e,S,l),S.innerHTML=zs,s(e,at,l),s(e,le,l),o(le,Ll),s(e,nt,l),s(e,se,l),o(se,xl),s(e,rt,l),s(e,oe,l),o(oe,Hl),s(e,ft,l),s(e,L,l),L.innerHTML=Gs,s(e,pt,l),s(e,ie,l),o(ie,Bl),s(e,ut,l),s(e,x,l),x.innerHTML=Ns,s(e,ht,l),s(e,ae,l),o(ae,Ml),s(e,vt,l),s(e,H,l),H.innerHTML=Ys,s(e,mt,l),s(e,ne,l),o(ne,Ul),s(e,dt,l),s(e,B,l),B.innerHTML=Ks,s(e,ct,l),s(e,re,l),o(re,Tl),s(e,wt,l),s(e,_,l),o(_,Rl),o(_,Ue),o(Ue,Al),o(_,Ol),s(e,Et,l),s(e,M,l),M.innerHTML=Qs,s(e,_t,l),s(e,fe,l),o(fe,Wl),s(e,yt,l),s(e,U,l),U.innerHTML=Js,s(e,It,l),s(e,pe,l),o(pe,Fl),s(e,bt,l),s(e,T,l),T.innerHTML=Vs},p:ql,i:ql,o:ql,d(e){e&&t(w),e&&t(Te),e&&t(R),e&&t(Re),e&&t(A),e&&t(Ae),e&&t(O),e&&t(Oe),e&&t(d),e&&t(We),e&&t(W),e&&t(Fe),e&&t(F),e&&t(Ce),e&&t(C),e&&t(qe),e&&t(q),e&&t(De),e&&t(D),e&&t(je),e&&t(j),e&&t(ze),e&&t(E),e&&t(Ge),e&&t(z),e&&t(Ne),e&&t(G),e&&t(Ye),e&&t(N),e&&t(Ke),e&&t(h),e&&t(Qe),e&&t(K),e&&t(Je),e&&t(Q),e&&t(Ve),e&&t(J),e&&t(Xe),e&&t(V),e&&t(Ze),e&&t(b),e&&t($e),e&&t(X),e&&t(ge),e&&t(Z),e&&t(et),e&&t($),e&&t(tt),e&&t(g),e&&t(lt),e&&t(P),e&&t(st),e&&t(ee),e&&t(ot),e&&t(te),e&&t(it),e&&t(S),e&&t(at),e&&t(le),e&&t(nt),e&&t(se),e&&t(rt),e&&t(oe),e&&t(ft),e&&t(L),e&&t(pt),e&&t(ie),e&&t(ut),e&&t(x),e&&t(ht),e&&t(ae),e&&t(vt),e&&t(H),e&&t(mt),e&&t(ne),e&&t(dt),e&&t(B),e&&t(ct),e&&t(re),e&&t(wt),e&&t(_),e&&t(Et),e&&t(M),e&&t(_t),e&&t(fe),e&&t(yt),e&&t(U),e&&t(It),e&&t(pe),e&&t(bt),e&&t(T)}}}const uo={title:"Home Server Part 1",date:"2021-02-13",categories:["server","docker","linux"],excerpt:"I had some spare time this weekend and decided it was time to dust off the old laptop I had in a draw and see what we can use it for..."};class ho extends ao{constructor(w){super(),no(this,w,null,fo,ro,{})}}export{ho as default,uo as metadata};
