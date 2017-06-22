--These are the sql commands to create database

CREATE TABLE "Estimates"
(
	"ID" INTEGER PRIMARY KEY("ID"),
	"FirstName" TEXT NOT NULL,
	"LastName" TEXT NOT NULL,
	"StreetAddress" TEXT NOT NULL,
	"City" TEXT NOT NULL,
	"ZipCode" INTEGER NOT NULL,
	"PhoneNumber" INTEGER NOT NULL,
	"Email" TEXT NOT NULL,
	"RequestsMow" INTEGER NOT NULL,
	"RequestsBlow" NUMERIC NOT NULL,
	"RequestsEdge" REAL NOT NULL,
	"Cost" NUMERIC NOT NULL,
	"AreaInSquareFeet" NUMERIC NOT NULL
);
