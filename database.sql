CREATE TABLE users (
  id serial primary key,
  username varchar(80) not null UNIQUE,
  password varchar(240) not null,
  user_role INT
);

CREATE TABLE data (
	entry_id serial primary key,
	id INT REFERENCES users ON DELETE CASCADE,
	data_date DATE,
	age_value INT,
	family_history_value BOOLEAN,
	physical_activity_value INT,
	systolic_value INT,
	diastolic_value INT,
	nicotine_value BOOLEAN,
	glu_value INT,
	hdl_value INT,
	ldl_value INT,
	trg_value INT,
	waist_value DECIMAL(3,1),
	sleep_value DECIMAL(3,1),
	height_value DECIMAL(4,2),
	weight_value DECIMAL(4,1),
	gender char(1),
	age_score INT,
	physical_activity_score INT,
	family_history_score INT,
	bp_score INT,
	nicotine_score INT,
	glu_score INT,
	hdl_score INT,
	ldl_score INT,
	waist_score INT,
	sleep_score INT,
	cvd_score INT
);

CREATE TABLE categories (
	category_id serial primary key,
	category_name varchar(20)
);

CREATE TABLE report_info (
	report_id serial primary key,
	category_id INT REFERENCES categories ON DELETE CASCADE,
	category_description varchar(255)
);

CREATE TABLE resources (
    resource_id serial primary key,
    category_id INT REFERENCES categories ON DELETE CASCADE,
    resource_info varchar(255)

CREATE TABLE participant_info ( 
     participant_id SERIAL PRIMARY KEY, 
     id INT REFERENCES users ON DELETE CASCADE NOT NULL, 
     disclaimer BOOLEAN, 
     first_name CHAR(25), 
     last_name CHAR(30),
     email VARCHAR(60)


);