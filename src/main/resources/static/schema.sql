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
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_roles
    OWNER to postgres;
    
INSERT INTO public.user_roles(
	user_id, role_id)
	VALUES (1, 1);