## Setup

### 1\. Clone project ###
 
  ```sh
   git clone

   cd react-app-ShareNotes

   npm ci

   sudo npm link
  ```

### 2\. Install SQL database ###

Example of ready and fast solution: 

> Download and install one of the program platforms: 
>  - MAMP: https://www.mamp.info/en/windows/
>  - Open Server: https://ospanel.io/

***Open server SQL installation***
  1\. Click 'Run server' button
  2\. Click 'Advanced' button -> PhpMyAdmin
  3\. Enter login: root
  4\. Create Database
  5\. Enter database name: reactjs
  6\. Enter encoding: utf8mb4u_unicode_ci -> create
  7\. Click import: choose reactjs.sql

Написать про настройки php

  Database is created

  ***MAMP SQL installation***
  1\. Click 'Start servers' button
  ![Mamp start server](https://github.com/Femalopper/raw/blob/main/images/Mamp%20start.png)
  2\. Click 'Open WebStart page' button -> TOOLS -> PhpMyAdmin
  ![Mamp start server](https://github.com/Femalopper/raw/blob/main/images/Mamp%20start%20page.png)
  ![Mamp start server](https://github.com/Femalopper/raw/blob/main/images/Mamp%20phpmyadmin.png)
  3\. Click New
  4\. Enter database name: reactjs
  5\. Enter encoding: utf8mb4u_unicode_ci -> create
  ![Mamp start server](https://github.com/Femalopper/raw/blob/main/images/Mamp%20create%20Database.png)
  6\. Click import: choose reactjs.sql -> Go
  ![Mamp start server](https://github.com/Femalopper/raw/blob/main/images/Mamp%20create%20Database2.png)

  Database is created

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