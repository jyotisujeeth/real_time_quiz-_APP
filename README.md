# quiz-time

A Real Time Multiplayer Quiz Application built using Node.js, Express, Mongoose, Socket.io 

### Installation

	$npm install
 $node server.js

### Game Settings

By defult this game is played between two players and for five rounds.
Change the defaults in file `app/database/schemas/room.js`.

By default each question has an answering time of 10 seconds.
Change this delay(TIME_INTERVAL) in file  `app/socket/index.js`

### How to play
1. Lobby:
Create a lobby that displays a list of available rooms. Each room should accommodate a maximum of two users before the game can start. If no rooms are available, the system should allow the creation of a new room and addition of a user.

2. Matchmaking:
Develop a matchmaking feature that enables users to join rooms with vacant slots. A user can join only one room at a time.

3. Gameplay:
Implement the gameplay mechanics. Randomly select 5 questions from a predefined list of questions and answers. Both users in a room should receive the questions one by one in real-time. Each user has a 10-second window to respond with their answers. The scoring system awards 10 points for correct answers.

4. Game Conclusion:
End the game after collecting responses for 5 questions or after 50 seconds, whichever comes first. Broadcast the result to both users. Once the game concludes, the respective room should be closed and deleted.
