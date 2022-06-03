CREATE SCHEMA `resourceinn`;

CREATE TABLE company (
    company_id int NOT NULL,
    company_name varchar(255),
    annual_leaves int,
    unpaid_leaves int,

    PRIMARY KEY (company_id)
);

DELETE FROM company;
DROP TABLE company;


CREATE TABLE employee (
    emp_id int NOT NULL AUTO_INCREMENT,
    emp_name varchar(255) NOT NULL,
    emp_email varchar(255) NOT NULL,
    emp_password longtext NOT NULL,
    emp_first_name varchar(255),
    emp_middle_name varchar(255),
    emp_father_husband_name varchar(255),
    emp_gender varchar(255),
    emp_date_of_birth DATE,
    emp_marital_status BOOLEAN,
    emp_religion varchar(255),
    emp_nationality varchar(255),
    emp_blood_group varchar(255),
    emp_profile_pic varchar(255),
    emp_salutation varchar(20),
    emp_mobile_no varchar(255),
    emp_landline_no varchar(255),
    
    PRIMARY KEY (emp_id)
);

INSERT INTO employee (emp_name, emp_email, emp_password) VALUES ('barry', 'barry@email.com', 'hello');

DELETE FROM employee;
DROP TABLE employee;

/*============employee-identity-info=========*/
CREATE TABLE emp_identity_card (
    identity_card_id int NOT NULL AUTO_INCREMENT,
    emp_id int NOT NULL,
    cinic_no varchar(255) NOT NULL,
    cnic_attachment varchar(255),
    cnic_expiry_date DATE,
    
    PRIMARY KEY (identity_card_id),
    FOREIGN KEY (emp_id) REFERENCES employee(emp_id)
);


DELETE FROM emp_identity_card;
DROP TABLE emp_identity_card;

/*============emp-driving-license-info=========*/
CREATE TABLE emp_driving_card (
    driving_card_id int NOT NULL AUTO_INCREMENT,
    emp_id int NOT NULL,
    driving_license_no varchar(255) NOT NULL,
    driving_license_attachment varchar(255),
    driving_license_expiry_date DATE,
    
    PRIMARY KEY (driving_card_id),
    FOREIGN KEY (emp_id) REFERENCES employee(emp_id)
);


DELETE FROM emp_driving_card;
DROP TABLE emp_driving_card;


/*============attendacne===========*/
CREATE TABLE attendance (
    attendance_id int NOT NULL AUTO_INCREMENT,
    emp_id int NOT NULL,
    check_in DATETIME,
    check_out DATETIME,
    
    PRIMARY KEY (attendance_id),
    FOREIGN KEY (emp_id) REFERENCES employee(emp_id)
);

DELIMITER //
CREATE PROCEDURE sp_monthly_attendance(IN var_emp_id INT)
BEGIN
    SELECT * FROM attendance
    WHERE UNIX_TIMESTAMP(check_in) >= UNIX_TIMESTAMP(LAST_DAY(CURRENT_DATE()) + INTERVAL 1 DAY - INTERVAL 1 MONTH)
    AND UNIX_TIMESTAMP(check_in) <  UNIX_TIMESTAMP(LAST_DAY(CURRENT_DATE()) + INTERVAL 1 DAY) AND emp_id = var_emp_id;
END //
DELIMITER ;

CALL sp_monthly_attendance(1);

/*select day name*/
select dayname('2022-05-18 18:36:59');

/*no of days between 2 dates*/
SELECT datediff('2022-05-18 18:36:59', '2022-05-19 18:36:59');

/*select data of a month*/
SELECT * FROM attendance
    WHERE UNIX_TIMESTAMP(check_in) >= UNIX_TIMESTAMP(LAST_DAY(CURRENT_DATE()) + INTERVAL 1 DAY - INTERVAL 1 MONTH)
    AND UNIX_TIMESTAMP(check_in) <  UNIX_TIMESTAMP(LAST_DAY(CURRENT_DATE()) + INTERVAL 1 DAY) AND emp_id = 1;

INSERT INTO attendance (emp_id, check_in, check_out) VALUES (1, '2022-05-26 18:40:51', '2022-05-26 23:30:19');

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

/*============leave===========*/
CREATE TABLE emp_leave (
    leave_id int NOT NULL AUTO_INCREMENT,
    emp_id int NOT NULL,
	leave_type varchar(255) NOT NULL, 
	leave_date DATE NOT NULL,
    
    PRIMARY KEY (leave_id),
    FOREIGN KEY (emp_id) REFERENCES employee(emp_id)
);

SELECT count(leave_id) as leave_count from emp_leave where emp_id=1 and leave_type="Annual";

DELETE FROM emp_leave;
DROP TABLE emp_leave;

/*============company specific constants===========*/
CREATE TABLE company_constants (
    constant_id int NOT NULL AUTO_INCREMENT,
    /*company_id int NOT NULL,*/
    constant_key varchar(255) NOT NULL,
	constant_value varchar(255) NOT NULL,
    
    PRIMARY KEY (constant_id)
    /*FOREIGN KEY (attendance_id) REFERENCES attendance(attendance_id)*/
);

DELETE FROM company_constants;
DROP TABLE company_constants;
