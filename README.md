Title:
Accountability App 

Description:
Accomplish your goals.  Sets up a group, or have the app push notifications and reminders. Set a monthly goal, then break it in to weekly goals.  Break those weekly goals into three daily actions.  Your coach will see your progress and keep you accountable. Celebrate your accomplishments with your friends by posting your wins.  

Database Schema:

User:string
Password:string


Monthly Goal:string
Weekly Goal1:string
Weekly Goal2:string
Weekly Goal3:string
Weekly Goal4:string
Daily Goal1:string
Daily Goal2:string
Daily Goal3:string

Coach:string
Friends:string

Pictures:array



Wireframe:




![Wireframe](https://github.com/forexsnyder/Accountability/blob/master/Images/App%20Diagram.png)


Client:

1. Navigate Monthly, Weekly, Daily Goals.
2. Set goals.
3. Set appointments.
4. Modify goals.

Manager:
1. Add Clients
2. List Clients.
3. See goals of clients.
4. Modify goals.
5. Set appointments.

Post MVP:

1. Authentication

2. Upgrade database to MongoDB

3. Deploy in React Native

Priority Matrix:

![Wireframe](https://github.com/forexsnyder/Accountability/blob/master/Images/Priority%20Matrix.png)

Daily Schedule:


![Wireframe](https://github.com/forexsnyder/Accountability/blob/master/Images/Daily%20schedule.png)

Changelog:
1. Removed Daily, Weekly, Monthly pages, easier for the user to fill everything out on a signle page.
2. Removed Coach update function, need a different data base to have live updates.
