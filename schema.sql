DROP DATABASE IF EXISTS book_db;
CREATE DATABASE book_db;
 
 USE book_db;
  CREATE TABLE user(
      id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
    second_name varchar(255) NOT NULL,
    e_mail varchar(80) NOT NULL,
    phone_number INTEGER NOT NULL,
    address_id int NOT NULL,
	PRIMARY KEY (id),
     FOREIGN KEY (address_id) REFERENCES address(address_id)
  );

  CREATE TABLE address(
   address_id int NOT NULL AUTO_INCREMENT,
	street1 varchar(255) NOT NULL,
    street2 varchar(255) NOT NULL,
    city varchar(80) NOT NULL,
    state varchar(80) NOT NULL,
    zip_code INTEGER NOT NULL,
	PRIMARY KEY ( address_id)
  );
  
  CREATE TABLE author(
    author_id int NOT NULL AUTO_INCREMENT,
	
    author_name varchar(255) NOT NULL, 
    PRIMARY KEY ( author_id ) 
  );

  CREATE TABLE book_store(
   id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
   description varchar(255) NOT NULL,
    year INTEGER NOT NULL,
    price INTEGER NOT NULL,
    zip_code INTEGER NOT NULL,
     author_id int NOT NULL,
	PRIMARY KEY (id),
     FOREIGN KEY (author_id) REFERENCES author(author_id)  
);



