CREATE DATABASE IF NOT EXISTS gestion_eventos;

USE gestion_eventos;

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria_id INT NOT NULL,

    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    fecha DATETIME NOT NULL,
    lugar VARCHAR(150) NOT NULL,

    precio DECIMAL(10,2) DEFAULT 0,

    cupos_totales INT NOT NULL,
    cupos_disponibles INT NOT NULL,

    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_evento_categoria
        FOREIGN KEY (categoria_id)
        REFERENCES categorias(id)
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(150) NOT NULL,

    correo VARCHAR(150) NOT NULL UNIQUE,

    telefono VARCHAR(30),

    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE inscripciones (
    id INT AUTO_INCREMENT PRIMARY KEY,

    usuario_id INT NOT NULL,

    evento_id INT NOT NULL,

    fecha_inscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE(usuario_id, evento_id),

    CONSTRAINT fk_inscripcion_usuario
        FOREIGN KEY (usuario_id)
        REFERENCES usuarios(id),

    CONSTRAINT fk_inscripcion_evento
        FOREIGN KEY (evento_id)
        REFERENCES eventos(id)
);