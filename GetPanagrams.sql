DELIMITER $$
CREATE DEFINER=`user`@`db` PROCEDURE `GetPangrams`(IN `all_chars` VARCHAR(7))
BEGIN
    SELECT UPPER(words_all) AS "Pangrams Found"
    FROM words_all
    -- Check each letter with case-insensitive regex
    WHERE words_all REGEXP CONCAT(SUBSTRING(all_chars, 1, 1), '(?i)')
      AND words_all REGEXP CONCAT(SUBSTRING(all_chars, 2, 1), '(?i)')
      AND words_all REGEXP CONCAT(SUBSTRING(all_chars, 3, 1), '(?i)')
      AND words_all REGEXP CONCAT(SUBSTRING(all_chars, 4, 1), '(?i)')
      AND words_all REGEXP CONCAT(SUBSTRING(all_chars, 5, 1), '(?i)')
      AND words_all REGEXP CONCAT(SUBSTRING(all_chars, 6, 1), '(?i)')
      AND words_all REGEXP CONCAT(SUBSTRING(all_chars, 7, 1), '(?i)')
    -- Restrict to the allowed character set
    AND words_all REGEXP CONCAT('^[', all_chars, ']+$(?i)');
END$$
DELIMITER ;