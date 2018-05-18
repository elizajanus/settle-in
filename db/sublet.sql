DROP DATABASE IF EXISTS settle_in;
CREATE database settle_in;

USE settle_in;

CREATE TABLE sublet (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL
  description VARCHAR(255) NOT NULL,
  rent INT NOT NULL,
  roommates INT NOT NULL,
  female BOOLEAN NOT NULL,
  male BOOLEAN NOT NULL,
  city varchar (100) NOT NULL,
  location varcahar (100) NOT NULL,
  landlord VARCHAR (50) NOT NULL
  PRIMARY KEY (position)
);

INSERT INTO sublet (title, description, rent, roommates, female, male, city, location) values ("Fan House in Downtown", "This house located in downtown Richmond is only a 15 minute walk to VCU and centrally located to dozens of anemities and close to three parks and walking and biking trails", 385, 2, 1, 0, "Richmond", "Kemper St at Randolph", "Angela Shrute");
INSERT INTO sublet (title, description, rent, roommates, female, male, city) values ("Landmark Lifestyle Apartments", "Vintage-styled paartments are centrally located, have classic wooden floors, and are within walking distance to everything!", 650, 1, 1, 0, "Richmond", "900 West Franklin Street", "Feinstein Inc ");
INSERT INTO sublet (title, description, rent, roommates, female, male, city, location) values ("Cary Street Room", "The whole house is available for rent by room, has a washer and dryer, and on-site parking", 700, 2, 0, 0, "Richmond", "1233 West Cary Street", "April Ludgate");
INSERT INTO sublet (title, description, rent, roommates, female, male, city, location) values ("Moseley Detached House", "This downtown house needs a female roomate for 2 current occupants. Live in style close to the river!", 365, 2, 1, 0, "Richmond", "Moseley St", "Maurice Moss");
INSERT INTO sublet (title, description, rent, roommates, female, male, city, location) values ("Private Room Single Family House", "Stay however long or short you need in this single-family home in Eastern Henrico" 600, 3, 1, 0, "East Henrico", "Featherwood Way at Creighton Road", "Gary Gergich");
INSERT INTO sublet (title, description, rent, roommates, female, male, city, location) values ("Single Bed in Manchester", "Undergrad students welcome! All utilities are included, and we're close to the river!", 625, 1, 0, 1, "Richmond", "Perry Street", "Dunder Mifflin");
INSERT INTO sublet (title, description, rent, roommates, female, male, city, location) values ("Master Bedroom in Private Home", "Rent the large master bedroom in a quiet home in a quiet neighborhood. All utilities are included, and W&D are on site", 700, 3, 1, 1, "Richmond", "Pump Road", "Maurice Moss");
INSERT INTO sublet (title, description, rent, roommates, female, male, city, location) values ("1 bedroom in Church Hill", "One bedroom available in a Church Hill with Washer and Dryer in house and 24 year old male roommate", 575, 1, 0, 1, "Richmond", "Church Hill", "Loft Remedies");
INSERT INTO sublet (title, description, rent, roommates, female, male, city, location) values ("Parkwood Home near VCU", "4 bed, 2 bath rowhouse near VCU needs a new roommates! Be in the middle of everything", 500, 3, 1, 1, "Richmond", "1224 Parkwood Avenue", "Dunder Mifflin");
INSERT INTO sublet (title, description, rent, roommates, female, male, city, location) values ("Oregon Hill/VCU Room", "Large first floor bedroom available. Come live with rising Juniors at VCU!", 533, 2, 1, 0, "Richmond", "Pine St at Spring St", "Reynholm Industries");
INSERT INTO sublet (title, description, rent, roommates, female, male, city, location) values ("Female Roommate Needed", "Joing us in the large townhome only minutes from MCV campus and walking distance to restaurants and stores!", 445, 3, 1, 0, "Richmond", "Leigh St at James St", "RVApts");
INSERT INTO sublet (title, description, rent, roommates, female, male, city, location) values ("Room in N. Chesterfield", "Private, full-sized bathroom plus shared laundry room and living spaces.", 550, 3, 1, 1, "N. Chesterfield", "Midlothian Turnpike", "April Ludgate");


