CREATE SCHEMA `resourceinn`;

CREATE TABLE user (
    user_id int NOT NULL AUTO_INCREMENT,
    user_name varchar(255) NOT NULL,
    user_email varchar(255) NOT NULL,
    user_password longtext NOT NULL,
    PRIMARY KEY (user_id)
);

DELETE FROM user;
DROP TABLE user;