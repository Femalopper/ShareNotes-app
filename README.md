## Setup

### 1\. Clone project ###
 
  ```sh
   git clone git@github.com:Femalopper/react-app-ShareNotes.git

   cd react-app-ShareNotes

   npm ci

   sudo npm link
  ```

### 2\. Install SQL database ###

Example of ready and fast solution: 

> Download and install one of the program platforms: 
>  - MAMP: https://www.mamp.info/en/windows/
>  - Open Server: https://ospanel.io/



  ### ***MAMP SQL installation*** ###

  **1\.** Click ***Start servers*** button

  >![Mamp start server](https://github.com/Femalopper/raw/blob/main/images/Mamp%20start.png)


  **2\.** Click ***Open WebStart page*** button -> ***TOOLS*** -> ***PhpMyAdmin***

  >![Mamp start page](https://github.com/Femalopper/raw/blob/main/images/Mamp%20start%20page.png)

  
  >![Mamp php admin](https://github.com/Femalopper/raw/blob/main/images/Mamp%20phpmyadmin.png)


  **3\.** Click ***New*** to create Database

  **4\.** Enter database name: ***reactjs***

  **5\.** Enter encoding: ***utf8mb4u_unicode_ci*** -> create

  >![Mamp create database](https://github.com/Femalopper/raw/blob/main/images/Mamp%20create%20Database.png)

  
  **6\.** Click ***import***: choose ***reactjs.sql*** -> ***Go***

  >![Mamp create database2](https://github.com/Femalopper/raw/blob/main/images/Mamp%20create%20Database2.png)


  >**Database is created!**

  8\. Open command line:
  ```sh
   cd backend_project/db

   code index.js
  ```
  9\. Correct sequelize setting (insert password parametr - 'root'):
  ```sh
   const sequelize = new Sequelize('reactjs', 'root', 'root', {
     dialect: 'mysql',
     host: 'localhost',
   });
  ```


### ***Open server SQL installation*** ###

  **1\.** Click ***Run server*** button

  >![OS run server](https://github.com/Femalopper/raw/blob/main/images/OS%20run%20server.png)


  **2\.** Click ***Advanced*** button -> ***PhpMyAdmin***

  >![OS phpadmin](https://github.com/Femalopper/raw/blob/main/images/OS%20phpmyadmin.png)


  ***If PhpMyAdmin is not loaded in the browser, set MySQL-8.0 module:***

  >![Correct modules](https://github.com/Femalopper/raw/blob/main/images/Correct%20modules.png)

 

  **3\.** Enter login: ***root***

  >![OS login enter](https://github.com/Femalopper/raw/blob/main/images/OS%20enter.png)


  **4\.** Click create Database

  **5\.** Enter database name: ***reactjs***

  **6\.** Enter encoding: ***utf8mb4u_unicode_ci*** -> create

  >![OS create database](https://github.com/Femalopper/raw/blob/main/images/OS%20create.png)


  **7\.** Click import: choose ***reactjs.sql***

  >![OS create database2](https://github.com/Femalopper/raw/blob/main/images/OS%20create2.png)


  >**Database is created!**


### 3\. Run server ###

  ```sh
   cd backend_project

   node index.js
  ```

### 4\. Run app ###

  ```sh
   cd frontend_project

   npm start
  ```

## Description
ShareNotes is an app for sharing encrypted messages. 