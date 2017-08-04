/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * Friday, 2017-09-04    CREATED
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
mysql -u usuario -p
use prueba
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * DROP TABLE
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
drop table users;
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * CREATE TABLE
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
create table users(
user_id     int UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE,
name        varchar(100),
surname     varchar(100),
email       varchar(100),
mobile      varchar(20),
password    varchar(1024),
sal         varchar(1024),
created_date    datetime default current_timestamp,
modified_date   datetime on update current_timestamp,
constraint pk_user_id primary key(user_id))
CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
