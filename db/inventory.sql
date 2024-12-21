CREATE DATABASE BarcodeScanner;

CREATE TABLE Products (
	ProductID SERIAL PRIMARY KEY,
	SerialNo VARCHAR(50),
	ProductName VARCHAR(255),
	Category VARCHAR (100),
	Quantity INT,
	CostPrice INT,
	Price NUMERIC (10, 2),
	PercentAdded NUMERIC (10, 2) DEFAULT 0.00,
	PercentAddedWholeSale NUMERIC (10, 2) DEFAULT 0.00,
	Barcode VARCHAR (50)
);

INSERT INTO Products (SerialNo, ProductName, Category, Quantity, CostPrice, Price, PercentAdded, PercentAddedWholeSale, Barcode)
VALUES
('12344566788', 'Pancit Canton', 'Food', 10, 100, 10, 3, 2, 123324112),
('91234568622', 'Gatorade', 'Beverage', 3, 90, 30, 3, 2, 41231245223),
('12348765994', 'Chocolate', 'Food', 5, 100, 20, 4, 4, 123124584332);

SELECT * FROM Products;

DROP TABLE Products;

CREATE TABLE Transactions (
	TransactionID SERIAL PRIMARY KEY,
	UserID INT,
	ProductID INT,
	Quantity INT,
	TotalPrice NUMERIC (10, 2),
	FOREIGN KEY (UserID) REFERENCES Users(UserID),
	FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

INSERT INTO Transactions(Quantity, TotalPrice)
VALUES
(3, 77.97),
(5, 17.45),
(2, 5.98);

SELECT * FROM Transactions;

DROP TABLE Transactions;

CREATE TABLE ActivityLogs (
	LogID SERIAL PRIMARY KEY,
	UserID INT,
	Action VARCHAR(255) NOT NULL,
	FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

INSERT INTO ActivityLogs (Action)
VALUES
('Added New Product'),
('Updated stock size'),
('Deleted a product');

SELECT * FROM ActivityLogs;

DROP TABLE ActivityLogs;





CREATE TABLE Admin (
    AdminID SERIAL PRIMARY KEY,              
    FullName VARCHAR(100) NOT NULL,            
    Email VARCHAR(255) UNIQUE NOT NULL,        
    PasswordHash VARCHAR(255) NOT NULL,        
    Role TEXT NOT NULL CHECK (Role IN ('Admin')),
    CreatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP, 
    UpdatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Admin(FullName, Email, PasswordHash, ROLE)
VALUES
('Jazzmher Osico', 'jazzmher.booc@gmail.com', 'Jazz123123', 'Admin');

SELECT * FROM Admin;




CREATE TABLE Cashier (
    CashierID SERIAL PRIMARY KEY,                
    FullName VARCHAR(100) NOT NULL,             
    Email VARCHAR(255) UNIQUE NOT NULL,         
    PasswordHash VARCHAR(255) NOT NULL,          
	Shift TEXT NOT NULL CHECK (Shift IN ('Morning', 'Afternoon', 'Evening')),
    CreatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP, 
    UpdatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO Cashier(FullName, Email, PasswordHash, Shift)
VALUES
('Charles Neri', 'charles.neri@gmail.com', 'gwapoko123123', 'Morning');

DROP TABLE Cashier;

SELECT * FROM Cashier;




