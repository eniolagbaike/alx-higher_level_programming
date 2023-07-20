-- Write a script that creates the MySQL server user user_0d_1.
-- Creates User
CREATE USER IF NOT EXISTS 'user_0d_1'@'localhost' IDENTIFIED BY 'user_0d_1_pwd';
-- Grants Priv.
GRANT ALL PRIVILEGES ON *.* TO 'user_0d_1'@'localhost';
-- Flush
FLUSH PRIVILEGES;
