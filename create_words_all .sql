-- Create a table of all words - source https://github.com/dwyl/english-words/tree/master
CREATE TABLE `words_all` (
 `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
 `all_words` VARCHAR(255) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB
 DEFAULT CHARSET=utf8mb4
 COLLATE=utf8mb4_unicode_ci;