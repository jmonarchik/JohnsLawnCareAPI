--these sql commands will populate database with initial data
--**The only two prepopulated database tables should be Locations and Toppings**

--DELETE FROM `Locations`;
INSERT INTO `Locations`(
	`LocationId`, `LocationAddress`, `LocationName`, `LocationPhoneNumber`
) VALUES (
	1, "1000 Abernathy Road, Atalnta, GA 31000", "Sandy Springs Pizza & Wings", "5558675309"
);
INSERT INTO `Locations`(
	`LocationId`, `LocationAddress`, `LocationName`, `LocationPhoneNumber`
) VALUES (
	2, "123 Main Street, Dunwoody, GA 31001", "Wright's Pizzeria", "7778675309"
);
INSERT INTO `Locations`(
	`LocationId`, `LocationAddress`, `LocationName`, `LocationPhoneNumber`
) VALUES (
	3, "455 Large Circle, Woodstock, GA 30189", "Woodstock's Large Pizzeria", "4789230102"
);

--DELETE FROM `Toppings`;
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	1,'Mushrooms',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	2,'Olives',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	3,'Pepperoni',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	4,'Cheese',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	5,'Ham',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	6,'Bacon',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	7,'Pinapple',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	8,'Peppers',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	9,'Anchovies',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	10,'Basil',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	11,'Ground Beef',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	12,'Garlic',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	13,'Tomatos',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	14,'Onions',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	15,'Zucchini',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	16,'Spinach',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	17,'Sausage',100, .99
);INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	18,'Salami',100, .99
);INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	19,'Chicken',100, .99
);
INSERT INTO `Toppings`(
	`ToppingId`,`ToppingName`,`ToppingQuantity`,`ToppingPrice`
) VALUES (
	20,'Artichoke',100, .99
);


