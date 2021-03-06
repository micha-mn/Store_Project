CREATE TABLE IF NOT EXISTS users (
	id serial PRIMARY KEY,
	user_name VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 72 ) NOT NULL,
    first_name VARCHAR ( 255 ) NOT NULL,
    last_name VARCHAR ( 255 ) NOT NULL,
    is_first_login BOOLEAN NOT NULL,
	created_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP,
    last_login TIMESTAMP 
);

INSERT INTO public.users(
	 user_name, password, first_name, last_name, is_first_login, created_on)
	VALUES ('Jean', '$2a$12$GFOd7M2iYWcgvUIY7sRki.Ytz.aG3qC/2u2MyxWA72l8T.jMMt0MO', 'Jean', 'Saade', false, NOW() );
	
CREATE TABLE IF NOT EXISTS roles (
	id serial PRIMARY KEY,
	name VARCHAR ( 60 ) NOT NULL
);

INSERT INTO public.roles( name )
	VALUES ('ADMIN');

CREATE TABLE IF NOT EXISTS user_roles
(
    user_id bigint NOT NULL,
    role_id bigint NOT NULL,
    CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id),
    CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6 FOREIGN KEY (role_id)
        REFERENCES public.roles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkhfh9dx7w3ubf1co1vdev94g3f FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

    
INSERT INTO public.user_roles(
	user_id, role_id)
	VALUES (1, 1);
	

CREATE TABLE IF NOT EXISTS public.supplier
(
    id bigint NOT NULL,
    created_by character varying(255) COLLATE pg_catalog."default",
    created_date timestamp without time zone,
    last_modified_by character varying(255) COLLATE pg_catalog."default",
    last_modified_date timestamp without time zone,
    address character varying(255) COLLATE pg_catalog."default",
    first_name character varying(255) COLLATE pg_catalog."default",
    instagram character varying(255) COLLATE pg_catalog."default",
    last_name character varying(255) COLLATE pg_catalog."default",
    phone character varying(255) COLLATE pg_catalog."default",
    supp_code character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT supplier_pkey PRIMARY KEY (id)

);

CREATE SEQUENCE supp_sequence START 1;
CREATE SEQUENCE item_sequence START 1;

CREATE TABLE IF NOT EXISTS naming_sequence (
    supp_sequence VARCHAR ( 255 ) NOT NULL,
    item_sequence VARCHAR ( 255 ) NOT NULL
);

INSERT INTO public.naming_sequence(
	supp_sequence, item_sequence)
	VALUES (nextval('supp_sequence'), nextval('item_sequence'));


CREATE TABLE IF NOT EXISTS public.brand
(
    id bigint NOT NULL,
    name_ar character varying(40) COLLATE pg_catalog."default",
    name_en character varying(40) COLLATE pg_catalog."default",
    CONSTRAINT brand_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.items
(
    id bigint NOT NULL,
    created_by character varying(255) COLLATE pg_catalog."default",
    created_date timestamp(6) without time zone,
    last_modified_by character varying(255) COLLATE pg_catalog."default",
    last_modified_date timestamp(6) without time zone,
    brand_id character varying(10) COLLATE pg_catalog."default",
    consignment_date timestamp(6) without time zone,
    consignment_price character varying(60) COLLATE pg_catalog."default",
    description character varying(60) COLLATE pg_catalog."default",
    inclusions character varying(255) COLLATE pg_catalog."default",
    item_code character varying(255) COLLATE pg_catalog."default",
    selling_price character varying(60) COLLATE pg_catalog."default",
    supp_code character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT items_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.report_management
(
    id bigint NOT NULL,
    param1 character varying(40) COLLATE pg_catalog."default",
    param2 character varying(40) COLLATE pg_catalog."default",
    param3 character varying(40) COLLATE pg_catalog."default",
    param4 character varying(40) COLLATE pg_catalog."default",
    param5 character varying(40) COLLATE pg_catalog."default",
    parameter_counter bigint,
    report_code character varying(40) NOT NULL UNIQUE COLLATE pg_catalog."default",
    report_name character varying(40) COLLATE pg_catalog."default",
    report_jasper_path character varying(60) COLLATE pg_catalog."default",
    static_path character varying(60) COLLATE pg_catalog."default",
    report_jrxml_path character varying(60) COLLATE pg_catalog."default",
    CONSTRAINT report_management_pkey PRIMARY KEY (id)
);


-- INSERT INTO public.report_management(
--	id ,param1, parameter_counter, report_code,  report_jrxml_path)
--	VALUES ('1','itemId', '1', 'ITEMBARCODE',  '\\src\\main\\resources\\static\\report\\ItemBarcode.jrxml');

       
INSERT INTO public.report_management(
	id ,param1, parameter_counter, report_code,  report_jrxml_path, report_name, static_path)
	VALUES ('1','itemId', '1', 'ITEMBARCODE',  '\\classes\\static\\report\\ItemBarcode.jrxml','ItemBarcode','\\classes\\static\\report\\');


CREATE TABLE IF NOT EXISTS public.configuration_table
(
    id bigint NOT NULL,
    column_name character varying(60) COLLATE pg_catalog."default",
    is_hidden boolean NOT NULL,
    table_name character varying(60) COLLATE pg_catalog."default",
    CONSTRAINT configuration_table_pkey PRIMARY KEY (id)
);

INSERT INTO configuration_table(id,column_name,table_name,is_hidden) VALUES ('1','id','itemsView','TRUE');
INSERT INTO configuration_table(id,column_name,table_name,is_hidden) VALUES ('2','createdBy','itemsView','TRUE');
INSERT INTO configuration_table(id,column_name,table_name,is_hidden) VALUES ('3','createdDate','itemsView','FALSE');
INSERT INTO configuration_table(id,column_name,table_name,is_hidden) VALUES ('4','lastModifiedBy','itemsView','TRUE');
INSERT INTO configuration_table(id,column_name,table_name,is_hidden) VALUES ('5','lastModifiedDate','itemsView','FALSE');
INSERT INTO configuration_table(id,column_name,table_name,is_hidden) VALUES ('6','brandName','itemsView','TRUE');
INSERT INTO configuration_table(id,column_name,table_name,is_hidden) VALUES ('7','brandId','itemsView','TRUE');
INSERT INTO configuration_table(id,column_name,table_name,is_hidden) VALUES ('8','consignmentDate','itemsView','FALSE');
INSERT INTO configuration_table(id,column_name,table_name,is_hidden) VALUES ('9','consignmentPrice','itemsView','FALSE');
INSERT INTO configuration_table(id,column_name,table_name,is_hidden) VALUES ('10','description','itemsView','FALSE');
INSERT INTO configuration_table(id,column_name,table_name,is_hidden) VALUES ('11','inclusions','itemsView','TRUE');
INSERT INTO configuration_table(id,column_name,table_name,is_hidden) VALUES ('12','itemCode','itemsView','FALSE');
INSERT INTO configuration_table(id,column_name,table_name,is_hidden) VALUES ('13','sellingPrice','itemsView','FALSE');
INSERT INTO configuration_table(id,column_name,table_name,is_hidden) VALUES ('14','suppCode','itemsView','TRUE');

CREATE OR REPLACE VIEW public.items_view
 AS
 SELECT i.id,
    i.created_by,
    i.created_date,
    i.last_modified_by,
    i.last_modified_date,
    b.name_en AS brand_name,
    i.brand_id,
    i.consignment_date,
    i.consignment_price,
    i.description,
    i.inclusions,
    i.item_code,
    i.selling_price,
    i.supp_code
   FROM items i,
    brand b
  WHERE i.brand_id::integer = b.id;
