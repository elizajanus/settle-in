-- DROP DATABASE IF EXISTS settle_in;
-- CREATE database settle_in;

-- USE settle_in;

-- CREATE TABLE sublet (
--   id INT NOT NULL AUTO_INCREMENT,
--   title VARCHAR(100) NOT NULL
--   description VARCHAR(255) NOT NULL,
--   rent INT NOT NULL,
--   roommates INT NOT NULL,
--   baths dec NOT NULL,
--   female BOOLEAN NOT NULL,
--   male BOOLEAN NOT NULL,
--   pets BOOLEAN NOT NULL,
--   city varchar (100) NOT NULL,
--   location varcahar (100) NOT NULL,
--   landlord VARCHAR (50) NOT NULL,
--   managementContactInfo (50) NOT NULL
--   PRIMARY KEY (position)
-- );

INSERT INTO sublet (title, [description], rent, roommates, female, male, city, [location], landlord, managementContactInfo) values ("Fan House in Downtown", "This house located in downtown Richmond is only a 15 minute walk to VCU and centrally located to dozens of anemities and close to three parks and walking and biking trails", 400, 2, 2, 1, 0, 0, "Richmond", "Kemper St at Randolph", "Angela Shrute", "804-555-5000");
INSERT INTO sublet (title, [description], rent, roommates, female, male, city, [location], landlord, managementContactInfo) values ("Landmark Lifestyle Apartments", "Vintage-styled apartments are centrally located, have classic wooden floors, and are within walking distance to everything!", 700, 1, 2, 1, 0, 1 "Richmond", "900 West Franklin Street", "Feinstein Inc", "804-555-1234");
INSERT INTO sublet (title, [description], rent, roommates, female, male, city, [location], landlord, managementContactInfo) values ("Cary Street Room", "The whole house is available for rent by room, has a washer and dryer, and on-site parking", 700, 2, 2, 1, 0, 0, "Richmond", "1233 West Cary Street", "April Ludgate", "804-555-5432");
INSERT INTO sublet (title, [description], rent, roommates, female, male, city, [location], landlord, managementContactInfo) values ("Moseley Detached House", "This downtown house needs a female roomate for 2 current occupants. Live in style close to the river!", 700, 2, 2, 1, 0, 0, "Richmond", "Moseley St", "Maurice Moss", "804-555-0000");
INSERT INTO sublet (title, [description], rent, roommates, female, male, city, [location], landlord, managementContactInfo) values ("Private Room Single Family House", "Stay however long or short you need in this single-family home in Eastern Henrico." 600, 3, 2, 1, 0, 1, "East Henrico", "Featherwood Way at Creighton Road", "Gary Gergich" , "804-555-1365");
INSERT INTO sublet (title, [description], rent, roommates, female, male, city, [location], landlord, managementContactInfo) values ("Single Bed in Manchester", "Undergrad students welcome! All utilities are included, and we're close to the river!", 600, 1, 2, 0, 1, 1, "Richmond", "Perry Street", "Dunder Mifflin", "804-555-9876");
INSERT INTO sublet (title, [description], rent, roommates, female, male, city, [location], landlord, managementContactInfo) values ("Master Bedroom in Private Home", "Rent the large master bedroom in a quiet home in a quiet neighborhood. All utilities are included, and W&D are on site", 700, 3, 2.5, 1, 1, 0, "Richmond", "Pump Road", "Maurice Moss", "804-555-0000");
INSERT INTO sublet (title, [description], rent, roommates, female, male, city, [location], landlord, managementContactInfo) values ("1 bedroom in Church Hill", "One bedroom available in a Church Hill with Washer and Dryer in house and 24 year old male roommate", 600, 2, 1, 0, 1, 0, "Richmond", "Church Hill", "Loft Remedies", "804-555-6789");
INSERT INTO sublet (title, [description], rent, roommates, female, male, city, [location], landlord, managementContactInfo) values ("Parkwood Home near VCU", "4 bed, 2 bath rowhouse near VCU needs a new roommates! Be in the middle of everything", 500, 3, 4, 1, 1, 0, "Richmond", "1224 Parkwood Avenue", "Dunder Mifflin", "804-555-9876");
INSERT INTO sublet (title, [description], rent, roommates, female, male, city, [location], landlord, managementContactInfo) values ("Oregon Hill/VCU Room", "Large first floor bedroom available. Come live with rising Juniors at VCU!", 500, 2, 2, 1, 0, 1, "Richmond", "Pine St at Spring St", "Reynholm Industries", "804-555-6667");
INSERT INTO sublet (title, [description], rent, roommates, female, male, city, [location], landlord, managementContactInfo) values ("Female Roommate Needed", "Join us in the large townhome only minutes from MCV campus and walking distance to restaurants and stores!", 500, 2.5, 3, 1, 0, 0, "Richmond", "Leigh St at James St", "RVApts");
INSERT INTO sublet (title, [description], rent, roommates, female, male, city, [location], landlord, managementContactInfo) values ("Room in N. Chesterfield", "Private, full-sized bathroom plus shared laundry room and living spaces.", 600, 2, 3, 1, 1, 0 "N. Chesterfield", "Midlothian Turnpike", "April Ludgate", "804-555-5432");


