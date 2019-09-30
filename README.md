# blow_your_mind
Class 201 Final Group Project

Description: 

Blow your mind is not just a game, but a virtual experience where you would be challenged in a fun and intriguing way.

## Team Members:
- DJ Grant
- Will Huang
- Vitaliy Drobyshev
- Ting Luo

## Wire Frame:

![wireframe](https://github.com/class201-team-cold-brew/blow_your_mind/blob/master/img/wireframe/wireframe.jpg)

## User Stories

**index.html**

As a user, I would like to enter my name and choose a difficulty level so that I can be recognized and welcomed and can control how hard the game is.
- Create a user form.
- Create a name field to accept user’s name input
- Create a difficulty drop-down menu to give users a choice of 3 difficulty levels. (20-15-10)
- Set the default value to “Easy (20 mins)” 
- Create a submit button to accept the user’s input (name and difficulty). Replace the initial user form with a welcome message of the user entered name and the difficulty level.

As a user, I would like to have a way to start the game.
- Create a start button that loads the game.html and the game environment.
- Activate all eventListeners and start the timer. 

As a user, I would like to view the rankings of the previous users so that I can see how I ranked.
- Create a ‘Ranking’ button that links to the local storage when clicked and retrieves data.
- Create a field displayed below the “Ranking’ button that will contain the information about previous ranking (name, the time it took to complete, difficulty level) retrieved from the local storage when the ranking button is clicked.

As a user, I would like to be able to see the rules of the game so that I know how to play
- Create a ‘Rules’ button that launches a text field with the rules.
- Create a text field with the explained rules and position it in the sidebar on the left side.
- Create an ‘X’ button that closes the Rules text field and returns to the index.html

As a user I would like to know about the creators of the game so that I can give them the credit they deserve
- Create a link to aboutus.html
- Create aboutus.html
- Include a link to index.html from the aboutus.html

**game.html**

As a user, I would like to remember the settings I selected so that the game provides a proper setup.
- Grab the submitted username and difficulty that will be stored in localStorage as key/value pair.
- The game page will parse the setting data and initialize it accordingly.

As a user, I would like to have an opportunity to be presented with a puzzle so that I can solve it.
- Create an image with an eventListener ‘click’.
- Create a form for the Riddle text box, user riddle input, submit button, and the number of attempts.
- Make the ‘Riddle’ text-box appear and populate the box with a riddle.
- Create a counter “You have # attempts left” for the number of attempts and display inside the text box. Set the default # to 3.


As a user, I would like to be able to guess the answer to the riddle so that I can get a key to continue the game.
- Create an input box inside the “Riddle” form to receive an answer from the user.
- Create a submit button so that the user can submit the answer.
- Compare user’s answer to the right answer 
- Display an alert if the answer is wrong
- If the answer is right, display a key in place of the image inside the bomb that the user clicked. 

As a user I would like see the key container updated so that I can keep track of how many keys I have collected.
- Create a keys holder in the upper left corner. 
- Display a green wire.
- Move the key from the image to the upper left and place it inside a first available container starting from the left.
- Reduce the counter of remaining attempts by 1.
- Clear the guess input box.
- If the counter reaches 0, create a button that loads the ‘End of the game’ screen.  

As a user, I would like to get the code if I solved all 3 questions so that I can enter it in the code field.
- If the key container has 3 images, merge the images together. 
- Display a 4-digit code.
- Create an input text field for the code 
- Create a submit button to receive the user’s code.
- Compare to the right code.
- If the code doesn’t match, create a button that takes the user to the gamelose.html when clicked
- If the code matches, create a button that loads the ‘Victory’ screen.

As a user, I would like to see the rules of the game so that I know what I am expected to do.
- Create a rules button that pauses the timer and display the rules in a text field
- Pause every eventListener on the page
- Create an ‘X’  button that closes the window and takes the user back to the game and activates the timer and components.

As a user, I would like to be offered hints so that I can have help when I need it to answer the questions
- Create a hint button with a counter (3) a user can push to display a hint.
- Link the hint to the riddle being displayed
- Display a hint below the button in a small window with an “X” option to close the window 
- Reduce the counter by 1
- Display an alert “Sorry, no more hints’ if the counter is at 0.

As a user, I would like to have a timer so that I can track the remaining time.
- Create a timer positioned inside the bomb with the time based on the chosen difficulty
- Activate the timer as soon as the user loads game.html


**gamelose.html**

As a user, I would like to be notified when I lost the game so that I can start over if I choose.
- Create a page that displays an exploding bomb
- Create a button “Main Menu” that takes the user to the index.html page


**gamewin.html**

As a user, I would like to be notified if I won so that I can start over if I choose.
- Create a page that displays a winning message
- Create a button “Main Menu” that takes the user to the index.html page
- Store info into the local storage (name, time, difficulty level)


## Domain Model:

![domain-model](https://github.com/class201-team-cold-brew/blow_your_mind/blob/master/img/wireframe/domain-modeling.jpg)

Link to domain-model: https://drive.google.com/file/d/1-VT3pGPz3JZFdIqRt7Rh8zHBYZJqypAT/view?usp=sharing
