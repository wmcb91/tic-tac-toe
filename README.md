## Will McBride

# A Tic-tac-toe single page application

This game has been created for General Assembly's Web Development Immersive.
HTML, SCSS, JavaScript, jQuery and AJAX are used in this application.

URL: https://wmcb91.github.io/tic-tac-toe/

Wireframe: http://imgur.com/a/iZlRP

# User Stories:

1. As a new user I want an easy sign up feature.
2. As a user, I want to be able to track the number of games I have played
3. As a user, I want to know if there is an issue when I try to sign up or sign in
4. As a user, I want to be able to change my password
5. As a user, I want to be able to 'rage quit' and start a new game mid game
6. As a user, I want to be able to start a new game after I won without refreshing

# Planning

I planned on sketching a wireframe outline on a notepad and using that as my
basis for creating a more detailed wireframe using balsalmiq Mockups. Once the
wireframe was complete, I wanted to write most of my HTML, my basic SCSS and
login API before writing my game logic before and game API. After getting the
basic game functioning, I wanted to go back to my HTML and SCSS to write more
advanced code to improve the look and function of the front-end UI for the app.
Last, I planned on running through every aspect of the application to check for
bugs and possibly discover features I wanted to add.

# Development Story

On day 1 (Wednesday), I made my wireframe using balsalmiq and had it finished by
the end of the day.

On Thursday, was able to write out most of my HTML for game but really did
not stick to the plan after that.  I wrote SCSS and got a basic game look but
was picky and took far too much time making small changes to get the look right.
I wrote the Authorization API and got it functioning but I did not move on when
I should have and added Authorization features that should have been added
towards the end of development.  The game did look good, but I wasn't close to
working.

On Friday, I began to realize how far off pace I was and began my game logic and
game API, but struggled with sticking with just one task and began bouncing
around which wasted time. By the end of the day, I could show pieces on my board
when clicked, and had progress in the logic, but did not have a working game.

Saturday was a very long but productive day.  I planned my next moves and coded
more efficiently. The planning helped me stay on one task at a time. By the end
of the day I had my logic functioning and felt good.

By midday Sunday I had all but my game data request working on my local game. I
deployed the game and did not have too much trouble initially. But when I tried
to include the [?over=] query in my get request things went a bit off the rails.
I did not realize I needed to redeploy each change for a while and wasted a bit
of time not understanding why any debugging techniques were working.  Then I
decided to use different technique for getting games won and finished that.
Finally, I had a working site (sort of).



# Future Changes
 - Cut down on code by changing event to call only API and have UI affected based
on .success or .failure.
 - Add local storage to keep player logged in on refresh
 -  Prevent logging player out when page refreshed
 -  Make X and O hover over space before pick
 -  Alternate who gets the first move of each game
 -  Prompt confirmation if player tries to start new game before previous game is over
 -  Make ‘play again' button work for gameOver modal
 -  Add x out button to new game error message
 -  Clear log-in field after log out
 -  Clear password field after clear password
 -  Once space is occupied, remove a:hover property
 -  Don’t allow X’s or O’s to be highlighted

# Bugs:
 - If you press new game btn too quickly after pressing sign in, you will
   get error message and it will stay.  Happens if you click before API
   processes because in browser events take priority in stack.  Possible
   fixes: don't allow click for X milliseconds after log in click or just
   make an x out button on the error message.

 - Requesting player data ends game progress. Board becomes undefined.

 - Breakpoint formatting.
