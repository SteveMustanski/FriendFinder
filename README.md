## FriendFinder
This project is part of a coding bootcamp that introduces node and express to serve an application to the client.  To make the application work,
node and epxress are used in the backend to process and return data as well has handle simple routing.

The application asks the user several questions and matches that data with existing users to suggest a friend.

The point of the exercise is to have node respond to GET and POST requests with no emphasis on scientifically matching users.

# Application Description
This applicaiton has a home page and a survey page.

The home page has links to a json listing of possible 'friends', a link to the github repo, and a link to take the survey.

The user enters their name, a link to a profile picture, and answers the questions.

When the user presses submit, their data is sent to the server where it is compared to people already in an array of possible matches.

Once the best match is found, a response is sent back to the client with the matched friend.

The user's information is then stored in the array.  Once Heroku shuts down the app for lack of activity, the array is reset to the seed entries.

# Technologies/Tools Used
* HTML/CSS
* NodeJS
* Heroku
* Bootstrap

# Depenencies
* express
* path

# Try the app
You can test out the app at: https://secret-journey-42090.herokuapp.com/

Note that it may take a few seconds for Heroku to respond if the application hasn't been hit recently.

# TODO
* better user navigation
* pretty up the survey form
* refactoring the code to have better variable names




