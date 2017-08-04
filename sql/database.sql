/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * Friday, 2017-09-04    CREATED
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
#connect with user who have privileges
mysql -u root -p
#create database
create database prueba character set utf8mb4 collate utf8mb4_unicode_ci;
#create user
create user 'usuario' identified by '1234';
#grant privileges only on database
grant all privileges on prueba.* to 'usuario' identified by '1234';
#reload newly assigned permissions
flush privileges;
