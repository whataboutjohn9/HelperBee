DELIMITER $$
CREATE DEFINER=`user`@`db` PROCEDURE `GetSpellingBee`(IN center_char CHAR(1), IN all_chars VARCHAR(7))
BEGIN
    SELECT UPPER(words_all) AS "Possible Words"
    FROM words_alpha
    -- Use REGEXP with 'i' for case-insensitivity
    WHERE words_all REGEXP CONCAT(center_char, '(?i)')
      AND words_all REGEXP CONCAT('^[', all_chars, ']+$(?i)')
      AND LENGTH(words_all) >= 4
    ORDER BY "Possible Words" ASC;
END$$
DELIMITER ;