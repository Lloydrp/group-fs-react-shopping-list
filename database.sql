-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- DB Name: fs-react-shopping

CREATE TABLE "list" (
	id serial PRIMARY KEY NOT NULL,
	item varchar(80) NOT NULL,
	quantity decimal NOT NULL,
	unit varchar(20),
	purchased boolean default false);
	
INSERT INTO "list" ("item", "quantity", "unit")
VALUES ('Apples','5','lbs'),
('Bread','1','loaf'),
('Milk','1','gallon'),
('Bananas','2','bunches');

SELECT * FROM "list";