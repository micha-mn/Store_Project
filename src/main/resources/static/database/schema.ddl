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

CREATE TABLE IF NOT EXISTS roles (
	id serial PRIMARY KEY,
	name VARCHAR ( 60 ) NOT NULL
);


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
    is_active boolean DEFAULT true,
    CONSTRAINT supplier_pkey PRIMARY KEY (id),
    CONSTRAINT supp_code UNIQUE (supp_code)
);

CREATE SEQUENCE supp_sequence START 1;

CREATE TABLE IF NOT EXISTS public.brand
(
    id bigint NOT NULL,
    name_ar character varying(40) COLLATE pg_catalog."default",
    name_en character varying(40) COLLATE pg_catalog."default",
    CONSTRAINT brand_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.client
(
    id bigint NOT NULL,
    created_by character varying(255) COLLATE pg_catalog."default",
    created_date timestamp(6) without time zone,
    last_modified_by character varying(255) COLLATE pg_catalog."default",
    last_modified_date timestamp(6) without time zone,
    address character varying(255) COLLATE pg_catalog."default",
    instagram character varying(255) COLLATE pg_catalog."default",
    name1 character varying(255) COLLATE pg_catalog."default",
    name2 character varying(255) COLLATE pg_catalog."default",
    phone character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT client_pkey PRIMARY KEY (id)
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
    consignment_price double precision,
    description character varying(60) COLLATE pg_catalog."default",
    inclusions character varying(255) COLLATE pg_catalog."default",
    item_code character varying(255) COLLATE pg_catalog."default",
    selling_price double precision,
    supp_code character varying(255) COLLATE pg_catalog."default",
    condition character varying(60) COLLATE pg_catalog."default",
    is_sold boolean NOT NULL DEFAULT false,
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
    report_code character varying(40) COLLATE pg_catalog."default" NOT NULL,
    report_jasper_path character varying(60) COLLATE pg_catalog."default",
    report_jrxml_path character varying(60) COLLATE pg_catalog."default",
    report_name character varying(40) COLLATE pg_catalog."default",
    static_path character varying(60) COLLATE pg_catalog."default",
    CONSTRAINT report_management_pkey PRIMARY KEY (id),
    CONSTRAINT report_management_report_code_key UNIQUE (report_code)
);

CREATE TABLE IF NOT EXISTS public.configuration_table
(
    id bigint NOT NULL,
    column_name character varying(60) COLLATE pg_catalog."default",
    is_hidden boolean NOT NULL,
    table_name character varying(60) COLLATE pg_catalog."default",
    CONSTRAINT configuration_table_pkey PRIMARY KEY (id)
);

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
    i.supp_code,
    i.condition,
    i.is_sold
   FROM items i,
    brand b
  WHERE i.brand_id::integer = b.id;

  CREATE TABLE IF NOT EXISTS public.sales
(
    id bigint NOT NULL,
    created_by character varying(255) COLLATE pg_catalog."default",
    created_date timestamp(6) without time zone,
    last_modified_by character varying(255) COLLATE pg_catalog."default",
    last_modified_date timestamp(6) without time zone,
    client_id character varying(255) COLLATE pg_catalog."default",
    item_id character varying(255) COLLATE pg_catalog."default",
    selling_date timestamp without time zone NOT NULL DEFAULT CURRENT_DATE,
    notes character varying(70) COLLATE pg_catalog."default",
    deferred_payment double precision,
    cash_payment double precision,
    other_payment double precision,
    payment_method_id character varying(255) COLLATE pg_catalog."default",
    payment_status character varying(70) COLLATE pg_catalog."default",
    total_price double precision,
    CONSTRAINT sales_pkey PRIMARY KEY (id)
);
 
 CREATE TABLE public.payment_status
(
    id bigint NOT NULL,
    name character(45) NOT NULL,
    PRIMARY KEY (id)
);
  
  CREATE TABLE IF NOT EXISTS public.payment_method
(
    id bigint NOT NULL,
    name character varying(40) COLLATE pg_catalog."default",
    CONSTRAINT payment_method_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.payment_history
(
    id bigint NOT NULL,
    created_by character varying(255) COLLATE pg_catalog."default",
    created_date timestamp(6) without time zone,
    last_modified_by character varying(255) COLLATE pg_catalog."default",
    last_modified_date timestamp(6) without time zone,
    deferred_payment double precision,
    cash_payment double precision,
    other_payment double precision,
    payment_date timestamp(6) without time zone,
    payment_method_id character varying(255) COLLATE pg_catalog."default",
    payment_status character varying(70) COLLATE pg_catalog."default",
    sale_id character varying(255) COLLATE pg_catalog."default",
    total_price double precision,
    CONSTRAINT payment_history_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.naming_sequence
(
    id bigint NOT NULL,
    item_sequence character varying(255) COLLATE pg_catalog."default",
    supp_code character varying(255) COLLATE pg_catalog."default",
    supp_sequence character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT naming_sequence_pkey PRIMARY KEY (id)
);

ALTER TABLE Sales
  RENAME COLUMN down_Payment TO cash_Payment;
  
ALTER TABLE Sales
  RENAME COLUMN down_Payment_Card TO other_Payment;
  
  drop view sales_view;
CREATE OR REPLACE VIEW public.sales_view
 AS
 SELECT s.id,
    s.item_id,
    i.item_code,
    b.name_en AS brand_name,
    i.description,
    replace(to_char(i.selling_price, '999,999,999.99'::text), ' '::text, ''::text) AS selling_price,
    concat(c.name1, ' ', c.name2) AS client_name,
    s.client_id,
    s.selling_date,
    s.notes,
    pm.name AS payment_method,
    s.payment_method_id,
    s.cash_Payment,
    s.other_Payment,
    s.deferred_payment,
    s.payment_status,
    ps.name AS payment_status_desc,
    i.selling_price AS total_price,
    s.created_date,
    s.last_modified_date
   FROM sales s,
    items i,
    client c,
    brand b,
    payment_method pm,
    payment_status ps
  WHERE s.item_id::integer = i.id AND s.client_id::integer = c.id AND i.brand_id::integer = b.id AND s.payment_method_id::integer = pm.id AND s.payment_status::integer = ps.id;
  