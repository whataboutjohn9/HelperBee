-- ---------------------------------------------------------
-- Word Data Source: https://github.com/dwyl/english-words
-- File used: words_alpha.txt
-- ---------------------------------------------------------
CREATE TABLE `words_all` (
 `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
 `all_words` VARCHAR(255) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB
 DEFAULT CHARSET=utf8mb4
 COLLATE=utf8mb4_unicode_ci;