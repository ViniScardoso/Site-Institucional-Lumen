create database bdLumen;
use bdLumen;

create table Shopping(
	nome varchar(45),
	endereco varchar(45),
	cnpj char(14) primary key
);

create table Usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45),
	logon varchar(45),
	senha varchar(45),
	cpf char(11),
	telefone char(11),
	tipo char(1),
	fkGestor int,
	foreign key (fkGestor) references Usuario(idUsuario),
	fkShopping char(14),
	foreign key (fkShopping) references Shopping(cnpj)
);

create table Setor(
	idSetor int primary key auto_increment,
	nome varchar(45),
	fkShopping char(14),
	foreign key (fkShopping) references Shopping(cnpj)
);

create table Sensor(
	idSensor int primary key auto_increment,
	modelo varchar(45),
	fkSetor int,
	foreign key (fkSetor) references Setor(idSetor)
);

create table Registro(
	idRegistro int primary key auto_increment,
	medida int,
	dataHoraRgt datetime,
	fkSensor int,
	foreign key (fkSensor) references Sensor(idSensor)
);

desc usuario;
desc shopping;
select * from usuario;
select * from shopping;


