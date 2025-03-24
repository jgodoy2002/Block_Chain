CREATE TABLE `users` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  `email` VARCHAR(255) UNIQUE,
  `password_hash` VARCHAR(255),
  `role_id` int
);

CREATE TABLE `roles` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `role_name` ENUM("fabricante","distribuidor","administrador","consumidor") UNIQUE,
  `description` TEXT
);

ALTER TABLE `Users` ADD FOREIGN KEY (`role_id`) REFERENCES `Roles` (`id`);

INSERT INTO users VALUES (1, "Hector", "yay@gmail.com", "password1", 100);
INSERT INTO roles VALUES (100,"consumidor","Este es el 1er consumidor");

INSERT INTO users VALUES (2, "Godoy", "godoy@gmail.com", "password2", 200);
INSERT INTO roles VALUES (200,"admin","Este es el 1er admin");

INSERT INTO users VALUES (3, "Lester", "lester@gmail.com", "password3", 300);
INSERT INTO roles VALUES (300,"fabricante","Este es el 1er admin");