CREATE SCHEMA `resourceinn`;

CREATE TABLE user (
    user_id int NOT NULL AUTO_INCREMENT,
    user_name varchar(255) NOT NULL,
    user_email varchar(255) NOT NULL,
    user_password longtext NOT NULL,
    user_first_name varchar(255),
    user_middle_name varchar(255),
    user_father_husband_name varchar(255),
    user_gender varchar(255),
    user_date_of_birth DATE,
    user_marital_status BOOLEAN,
    user_religion varchar(255),
    user_nationality varchar(255),
    user_blood_group varchar(255),
    user_profile_pic varchar(255),
    user_salutation varchar(20),
    user_mobile_no varchar(255),
    user_landline_no varchar(255),
    
    PRIMARY KEY (user_id)
);

DELETE FROM user;
DROP TABLE user;

/*============user-identity-info=========*/
CREATE TABLE user_identity_card (
    identity_card_id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    cinic_no varchar(255) NOT NULL,
    cnic_attachment varchar(255),
    cnic_expiry_date DATE,
    
    PRIMARY KEY (identity_card_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);


DELETE FROM user_identity_card;
DROP TABLE user_identity_card;

/*============user-driving-license-info=========*/
CREATE TABLE user_driving_card (
    driving_card_id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    driving_license_no varchar(255) NOT NULL,
    driving_license_attachment varchar(255),
    driving_license_expiry_date DATE,
    
    PRIMARY KEY (driving_card_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);


DELETE FROM user_driving_card;
DROP TABLE user_driving_card;


/*============attendacne===========*/
CREATE TABLE attendance (
    attendance_id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    check_in DATETIME,
    check_out DATETIME,
    
    PRIMARY KEY (attendance_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

DELETE FROM attendance;
DROP TABLE attendance;

/*============relaxation===========*/
CREATE TABLE relaxation (
    relaxation_id int NOT NULL AUTO_INCREMENT,
    attendance_id int NOT NULL,
	relaxation_type varchar(255) NOT NULL, /*value would be of CHECK_IN or CHECK_OUT*/
    
    PRIMARY KEY (relaxation_id),
    FOREIGN KEY (attendance_id) REFERENCES attendance(attendance_id)
);

DELETE FROM relaxation;
DROP TABLE relaxation;

