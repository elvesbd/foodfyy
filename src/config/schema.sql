CREATE DATABASE foodfy;

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  chef_id int NOT NULL,
  image text NOT NULL,
  title text NOT NULL,
  ingredients text[] NOT NULL,
  preparation text[] NOT NULL,
  information text NOT NULL,
  created_at timestamp DEFAULT (now())
);

CREATE TABLE chefs (
  id SERIAL PRIMARY KEY,
  name text NOT NULL,
  avatar_url text NOT NULL,
  created_at timestamp DEFAULT (now())
);