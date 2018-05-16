DROP DATABASE IF EXISTS DB;
CREATE database apartment_DB;

USE apartment_DB;

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  landlord VARCHAR (100) NOT NULL,
  review VARCHAR(255) NOT NULL,
  rating INT (1) NOT NULL,
  apartments BOOLEAN,
  houses BOOLEAN,
  location VARCHAR (100)
  PRIMARY KEY (position)
);

INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("Rental Nightmare!", "Angela Shrute", "This landlady was absolutely crazy. She brought her cats with her at each visit, and showed up unannounced. You'll never win an argument. Don't even try.", 2, 0, 1, "Ricmond");
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("Sweet Religious Lady", "Angela Shrute", "She's such a sweetheart. Her cats are darlings and comem to visit. She always insists on cleaing out the dryer lint, and she has such sage advice!"5, 0, 1, "Richmond");
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("Feinstein Follies", "Feinstein Inc.", "This rental company is terrible. They never fixed our W or D, and they overcharged 2X. Never rent from them!", 1, 1, 0, "DC and Richmond");
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("And the Dundee Award Goes to...", "Dunder Mifflin", "This is the best rental company ever. The grounds are clean, and the Sunday brunches by the pool are lit!", 5, 1, 0, "Richmond");
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("Dun-don't", "Dunder Mifflin", "This company is okay and all, but it's too expensive for what it is. Check somewhere else first.", 3, 1, 0, "Richmond");
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("Great Chill Landlady", "April Ludgate", "April Ludgate is by far the best landlady ever. She doesn't care about what we do so long as we're quiet.", 5, 0, 1, "Richmond");
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("Landlady from Hell", "April Ludgate", "Ms Ludgate is the creepiest person I've ever met. We were loud once, and she left a decapitated bat on our deck", 2, 0, 1, "Richmond");
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("Reynholm Industries Apartment", "Reynholm Industries", "The support staff are a bit slow, but overall it's a good company to work with", 3, 1, 0, "Richmond");
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("Reynholm Industries", "Reynholm Industries", "They need pools at each of their complexes. The walls are too thin. At least there's a parking deck", 3, 1, 0, "Richmond");
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("Reynholm Industries Towerblock", "Reynholm Industries", "They have the best monthly parties. Get downstairs quick, or all the tacos are gone!", 4, 1, 0, "Richmond");
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("Maurice Moss is the Boss", "Maurice Moss", "This sweetheart is a little weird, but he always brings licorice and warns you in advance when he's coming around", 5, 0, 1, "Richmond");
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("Maurice Moss is the Worst", "Maurice Moss", "He literally never answers his door. How am I supposed to get a hold of my own landlord?" 2, 0, 1, "Richmond");
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("RVApts is okay", "RVApts", "This company got me my sublease, and tried to pair me with someone, but honestly, this website is so much better for that." 2, 1, 0, "Richmond");
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("Loft Remedies- Never Again", "Loft Remedies", "Loft Remedies was supposed to manage my apt while I went on study abroad and sublet it. They were awful. They never collected rent on time." 2, 1, 0, "Richmond");
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("Loft Remedies", "Loft Remedies", "Loft Remedies was flipping awesome. They always collected rent late; so, we had a little extra time." 5, 1, 0);
INSERT INTO sublet (title, landlord, review, rating, apartments, houses, location) values ("Gary Gergich is the Greatest", "Gary Gergich", "Gary is just the sweetest. He always brings breakfast when collecting the check, and he stays around to chat." 5, 0, 1, "Richmond");

