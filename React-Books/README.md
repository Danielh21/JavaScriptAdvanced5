# JavaScript Period 6 Handin -Security

Excercise can be found here: https://docs.google.com/document/d/1ZY-pZDQfwEoQlVk0Qn-lKnpa40MOl-hQdGW9Fx2A5XE/edit#  

## Instructions  
* To insert some users to the database, start a local mongoDB and run the file Backend/createSomeUsers. Then two users should be created:
``Username: lib password: jegsover123 `` and ``Username: test password: boolean ``
* Passwords are hashed by the bcrypt algorithm, and are salted using the default [behavior](https://stackoverflow.com/questions/6832445/how-can-bcrypt-have-built-in-salts)
* The Application uses helmets standard protections for an express server
* The Application uses JWT to authentication. The "Server sceret" are found in a file called serverSecret.js, but are not pushed to github,
since its suppose to be a secret for the outside world.
* To test the secruity on the site, try doing delete, add and edit features for the book, without been logged in, and then try again
this time logged in!
* The 3 lib dependecy has been check using [nsp](https://nodesecurity.io/) and a screen shot can be found on the site
