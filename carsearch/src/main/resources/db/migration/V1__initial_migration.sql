CREATE TABLE brands (
   id UUID NOT NULL,
   created_at TIMESTAMP WITHOUT TIME ZONE,
   updated_at TIMESTAMP WITHOUT TIME ZONE,
   name VARCHAR(255),
   origin_country VARCHAR(255),
   website VARCHAR(255),
   slug VARCHAR(255),
   CONSTRAINT pk_brands PRIMARY KEY (id)
);

CREATE TABLE car_models (
  id UUID NOT NULL,
   created_at TIMESTAMP WITHOUT TIME ZONE,
   updated_at TIMESTAMP WITHOUT TIME ZONE,
   name VARCHAR(255),
   slug VARCHAR(255),
   body_type VARCHAR(255),
   brand_id UUID,
   CONSTRAINT pk_car_models PRIMARY KEY (id)
);

ALTER TABLE car_models ADD CONSTRAINT FK_CAR_MODELS_ON_BRAND FOREIGN KEY (brand_id) REFERENCES brands (id);

CREATE TABLE car_generations (
  id UUID NOT NULL,
   created_at TIMESTAMP WITHOUT TIME ZONE,
   updated_at TIMESTAMP WITHOUT TIME ZONE,
   name VARCHAR(255),
   model_id UUID,
   production_start_year INTEGER,
   production_end_year INTEGER,
   tire_size VARCHAR(255),
   length INTEGER,
   width INTEGER,
   height INTEGER,
   ground_clearance INTEGER,
   cargo_volume INTEGER,
   CONSTRAINT pk_car_generations PRIMARY KEY (id)
);

ALTER TABLE car_generations ADD CONSTRAINT FK_CAR_GENERATIONS_ON_MODEL FOREIGN KEY (model_id) REFERENCES car_models (id);

CREATE TABLE engines (
   id UUID NOT NULL,
   created_at TIMESTAMP WITHOUT TIME ZONE,
   updated_at TIMESTAMP WITHOUT TIME ZONE,
   generation_id UUID,
   name VARCHAR(255),
   fuel_type VARCHAR(255),
   drive_type VARCHAR(255),
   transmission_type VARCHAR(255),
   number_of_cylinders INTEGER,
   cylinder_layout VARCHAR(255),
   number_of_gears INTEGER,
   fuel_economy_city DECIMAL,
   fuel_economy_highway DECIMAL,
   fuel_economy_combined DECIMAL,
   power_kw DECIMAL,
   power_hp DECIMAL,
   power_bhp DECIMAL,
   top_speed_kph DECIMAL,
   acceleration_0_to_100_kph DECIMAL,
   CONSTRAINT pk_engines PRIMARY KEY (id)
);

ALTER TABLE engines ADD CONSTRAINT FK_ENGINES_ON_GENERATION FOREIGN KEY (generation_id) REFERENCES car_generations (id);
