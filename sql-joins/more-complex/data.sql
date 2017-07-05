CREATE TABlE IF NOT EXISTS bartenders(
  id INTEGER PRIMARY KEY,
  name TEXT,
  hometown TEXT,
  birthyear INTEGER
);

INSERT INTO bartenders (name, hometown, birthyear) VALUES
  ("moe", "springfield", 1965),
  ("selma", "milwaukee", 1970),
  ("patty", "philly", 1970);

  CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY,
    name TEXT,
    hometown TEXT,
    birthyear INTEGER
  );

INSERT INTO customers (name, hometown, birthyear) VALUES
  ("bart simpson", "springfield", 2008),
  ("maggie simpson", "milwaukee", 2016),
  ("lisa simpson", "philly", 2006);

CREATE TABLE IF NOT EXISTS drinks (
    id INTEGER PRIMARY KEY,
    name TEXT,
    calories INTEGER,
    price INTEGER,
    alcoholic INTEGER
  );

INSERT INTO drinks (name, calories, price, alcoholic) VALUES
  ("egg cream soda", 80, 3, 0),
  ("milkshake", 300, 5, 0),
  ("rootbeer", 180, 6, 0),
  ("ice cream float", 250, 8, 0),
  ("duff beer", 200, 7,  1),
  ("gin and tonic", 200, 7, 1);


CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    drink_id INTEGER,
    bartender_id INTEGER
  );

INSERT INTO orders (customer_id, drink_id, bartender_id) VALUES
  (1, 1, 1),
  (1, 1, 1),
  (2, 5, 2),
  (2, 5, 1),
  (2, 5, 1),
  (3, 6, 3),
  (1, 2, 1),
  (2, 3, 2),
  (3, 4, 3);

CREATE TABLE IF NOT EXISTS ingredients (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price INTEGER
  );


CREATE TABLE IF NOT EXISTS ingredients_drinks (
  id INTEGER PRIMARY KEY,
  drink_id INTEGER,
  ingredient_id INTEGER
);

INSERT INTO ingredients_drinks (drink_id, ingredient_id) VALUES
  (1, 6),
  (1, 5),
  (2, 3),
  (2, 5),
  (6, 1),
  (6, 2);

INSERT INTO ingredients (name, price) VALUES
  ('gin', 3),
  ('tonic', 4),
  ('milk', 2),
  ('rootbeer', 2),
  ('icecream', 2),
  ('seltzer', 2),
  ('rootbeer', 3),
  ('duff beer', 5);


  select drinks.name, drinks.id as drink_id, 
    sum(ingredients.price) as ingredient_price 
  from ingredients_drinks 
    inner join ingredients on ingredients.id = ingredients_drinks.ingredient_id 
    inner join drinks on drinks.id = ingredients_drinks.drink_id group by drink_id;
  


  CREATE TABlE IF NOT EXISTS bartenders(
  id INTEGER PRIMARY KEY,
  name TEXT,
  hometown TEXT,
  birthyear INTEGER
);

INSERT INTO bartenders (name, hometown, birthyear) VALUES
  ("moe", "springfield", 1965),
  ("selma", "milwaukee", 1970),
  ("patty", "philly", 1970);



  CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY,
    name TEXT,
    hometown TEXT,
    birthyear INTEGER
  );

INSERT INTO customers (name, hometown, birthyear) VALUES
  ("bart simpson", "springfield", 2008),
  ("maggie simpson", "milwaukee", 2016),
  ("lisa simpson", "philly", 2006);

CREATE TABLE IF NOT EXISTS drinks (
    id INTEGER PRIMARY KEY,
    name TEXT,
    calories INTEGER,
    price INTEGER,
    alcoholic INTEGER
  );

INSERT INTO drinks (name, calories, price, alcoholic) VALUES
  ("egg cream soda", 80, 3, 0),
  ("milkshake", 300, 5, 0),
  ("rootbeer", 180, 6, 0),
  ("ice cream float", 250, 8, 0),
  ("duff beer", 200, 7,  1),
  ("gin and tonic", 200, 7, 1);


CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    drink_id INTEGER,
    bartender_id INTEGER
  );

INSERT INTO orders (customer_id, drink_id, bartender_id) VALUES
  (1, 1, 1),
  (1, 1, 1),
  (2, 5, 2),
  (2, 5, 1),
  (2, 5, 1),
  (3, 6, 3),
  (1, 2, 1),
  (2, 3, 2),
  (3, 4, 3);

CREATE TABLE IF NOT EXISTS ingredients (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price INTEGER
  );


CREATE TABLE IF NOT EXISTS ingredients_drinks (
  id INTEGER PRIMARY KEY,
  drink_id INTEGER,
  ingredient_id INTEGER
);

INSERT INTO ingredients_drinks (drink_id, ingredient_id) VALUES
  (1, 6),
  (2, 3),
  (1, 5),
  (2, 5),
  (6, 1),
  (6, 2);

INSERT INTO ingredients (name, price) VALUES
  ('gin', 3),
  ('tonic', 4),
  ('milk', 2),
  ('rootbeer', 2),
  ('icecream', 2),
  ('seltzer', 2),
  ('rootbeer', 3),
  ('duff beer', 5);
  
-- who is our most profitable customer

-- select customers.name, sum(drinks.price) as revenue from orders
-- inner join drinks on drinks.id = orders.drink_id inner join customers on customers.id = orders.customer_id group by customer_id order by sum(drinks.price) desc limit 1;

select * from customers;

select name, min(birthyear) from customers;
