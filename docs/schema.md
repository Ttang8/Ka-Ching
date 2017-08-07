# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
email           | string    | not null, unique
session_token   | string    | not null, unique
password_digest | string    | not null
first_name      | string    | not null
last_name       | string    | not null
image_url       | string    | not null

## Items
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | string    | not null
image_url   | string    | not null
user_id     | integer   | not null
price       | integer   | not null
category_id | integer   | not null
location    | string    | not null


## Interests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, indexed
item_id     | integer   | not null, indexed

## Feedback
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
seller_id   | integer   | not null
buyer_id    | integer   | not null
body        | text      | not null

## Categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique
