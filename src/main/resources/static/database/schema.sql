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
    name_ar character varying(255) COLLATE pg_catalog."default",
    name_en character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT brand_pkey PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS public.items
(
    id bigint NOT NULL,
    created_by character varying(255) COLLATE pg_catalog."default",
    created_date timestamp(6) without time zone,
    last_modified_by character varying(255) COLLATE pg_catalog."default",
    last_modified_date timestamp(6) without time zone,
    brand_id bigint,
    consignment_date timestamp(6) without time zone,
    consignment_price character varying(255) COLLATE pg_catalog."default",
    description character varying(255) COLLATE pg_catalog."default",
    inclusions character varying(255) COLLATE pg_catalog."default",
    item_code character varying(255) COLLATE pg_catalog."default",
    selling_price character varying(255) COLLATE pg_catalog."default",
    supp_code character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT items_pkey PRIMARY KEY (id)
)
;
