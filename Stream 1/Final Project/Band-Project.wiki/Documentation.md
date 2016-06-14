DOCUMENTATION - BAND PROJECT
----------------------------

 

### Site Overview

This web site was inspired by the project brief which can be seen either on the
home page of this wiki or on the `ReadMe.md` in the project folder in the Stream
1 git directory.

 

If you navigate to the website (’[Click here for the Band
Site](http://gunnerjnr.uk/band-site/)’), you will arrive on the `home/landing`
page where you will be presented with a familiar site layout consisting of the
usual site `navigation`, `header`, `content` and `footer`.

 

At the top of the page is the site `navigation.`This should be simple enough to
use and pretty self explanatory. On the left hand side you will see the web site
brand/logo, and to the right you will see the links that navigate off to each
page. It should be noted that this is actually not a standard website that uses
`hyperlinks` to `navigate` from page to page, but is actually an ‘[Angular
JS](https://angularjs.org/)’ application. `Angular JS` is maintained by
‘`Google`’.

The application actually utilises the
‘[ng-route](https://docs.angularjs.org/api/ngRoute)’ functionality to insert the
different code snippets into the main ‘`index.html`’ file using the ‘`ng-view`’.

The reason for doing it this way, is because it allows us to re-use a lot of our
code without having to repeat ourselves. So we are not writing the same code
over and over again. It also allows for a sleeker application, a better look and
faster loading times, as it doesn’t have to wait for the page to be loaded each
time a link is clicked. It also changes the `URL` in the browser giving the end
user a feeling as if it works the same as any other web site they have used.

There is a mode in `angular js` called ‘`html5Mode`’ and is part of the
`$locationProvider`, however, I didn’t realise until I started running in to
issues, trying to get the friendly `URL`’s working, that is was deprecated as of
version `1.2` of `angular js`. Due to this, I actually did downgrade from
`angular js` version `1.5` to version `1.2`, unfortunately, I could only get the
friendly `URL`’s to work in my `local host` and not the `server`. I assume this
will be because my hosting provider needed some kind of configuration to allow
`routing`.

I decided as it wasn’t part of the brief, that I had lost enough time on this,
and so I decided to move on and continue without this feature.

 

You will see, instead of a standard type `header`, that I decided to use a
`carousel`. I felt this would be appropriate for the style of site and it works
as a great show case feature. The `carousel` is a `bootstrap carousel`. It is
probably worth mentioning now, that most of the site and layout utilise a lot of
the `bootstrap API` throughout.

 

Underneath the `carousel` in the content section you will probably note some
dummy content, this was created using a ‘`lorem ipsum`’ style plugin called
‘`bacon ipsum`’.

 

At the bottom of the page you will see the web site ‘`footer`’. It contains some
copyright text, but more importantly it contains a handful of `social
icons/links.`These have some neat `CSS` trickery to make them transition up on
hovering the mouse, and they also change colour to the appropriate colour that
we are used to seeing in these logo’s on a day to day basis.

 

 
