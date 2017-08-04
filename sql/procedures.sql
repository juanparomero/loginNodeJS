/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * Friday, 2017-09-04    CREATED
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

# #################################################################
# #################################################################
DELIMITER $$
CREATE PROCEDURE `registerUser`(
    in iname varchar(100),
    in isurname varchar(100),
    in iemail varchar(100),
    in imobile varchar(20),
    in ipassword varchar(1024),
    in isal varchar(1024)
)
BEGIN
    declare vnum integer;
    declare vmsg varchar(100);
    SELECT 
        count(*)
    into vnum
    FROM users
    WHERE email = iemail;

    if vnum > 0 then
        set vmsg = concat('El email ', iemail ,' ya está dado de alta.');
        signal sqlstate '20000'
            set message_text = vmsg;
    end if;

    insert into users(name, surname, email, mobile, password, sal)
        values(iname, isurname, iemail, imobile, ipassword, isal);

END;
$$
DELIMITER ;
# #################################################################
