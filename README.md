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
6. Run the Sql Script on your mysql database from the path app/documents/sqlscripts folder.

7. Open file application.properties in app/src/main/resources folder and modify spring.datasource.username and spring.datasource.password parameters. You should determine the security parameters based on the database installed on your computer.

8. At the command prompt, go to the [project folder]/app and type the following command:
``` bash
  $ mvn spring-boot:run
``` 
9. [click here](http://localhost:4200)

10. This will display a page similar to the one below: 
![Add](https://github.com/peymanME/Angular_SpringBoot/blob/master/app/documents/images/users.jpg)

