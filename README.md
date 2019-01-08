# CRUD with Angular, Spring Boot and MYSQL

To see the application can do the following steps:

1. Install Maven from the web site: https://maven.apache.org/download.cgi

2. Install Nodejs from the web site: https://nodejs.org/en/download/

3. Download the project on your computer

4. At the command prompt, go to the project folder/app and type the following command:
``` bash
  $ mvn install 
```
5. And also go to the project folder/frontend and type the following command:
``` bash
  $ npm install 
  $ npm start
```


Run the Sql Script on your mysql database from the path data/database folder

Create local.php in config/autoload folder and copy the following text into it

use Doctrine\DBAL\Driver\PDOMySql\Driver as PDOMySqlDriver;
return [
    'doctrine' => [
        'connection' => [
            'orm_default' => [
                'driverClass' => PDOMySqlDriver::class,
                'params' => [
                    'host'     => '127.0.0.1',
                    'user'     => 'root',
                    'password' => '',
                    'dbname'   => 'mydb',
                    'charset'  => 'utf8',
                ]
            ],            
        ],        
    ],
];
Attention: Host, user, password, dbname parameters you should determine, based on the database installed on your computer

If you would like to create a project through yourself, please follow the steps below: 

1. Create a project from the [spring boot site](https://start.spring.io) like the picture below
![spring boot site](https://github.com/peymanME/Angular_SpringBoot/blob/master/app/documents/images/start.spring.io.jpg)

2. Extract the zipped file any path you would like on your computer after you create and download the zipped file in step 1.

3. At the command prompt, go to the project folder and type the following command: (Attention: You have already installed MAVEN on your computer).
```bash
  $ mvn install
```



3. Create your database and tables on mysql 

4. Config data source in application.properties file

5. Create models by JEE

6. Create repository

7. Create restController

8. Create Angular project

![Add](https://github.com/peymanME/Angular_SpringBoot/blob/master/app/documents/images/Add.jpg)

