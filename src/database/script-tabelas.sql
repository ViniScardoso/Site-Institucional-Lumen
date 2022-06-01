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

create table tipoGrafico(
	idTipo int primary key auto_increment,
    nomeTipo varchar(45)
);

create table Registro(
	idRegistro int primary key auto_increment,
	medida int,
	dataHoraRgt datetime,
	fkSensor int,
	foreign key (fkSensor) references Sensor(idSensor),
    fkTipo int,
    foreign key (fkTipo) references TipoGrafico (idTipo)
);

desc usuario;
desc shopping;
select * from usuario;
select * from shopping;

-- insert de daods fictícios de medidas para teste

insert into TipoGrafico values (null, 'Tempo Real');

insert into setor values(null, 'A', 1234567); -- a fk do shopping depende do que será inserido no cadastro

insert into sensor values(null, 'ldr', 1);

insert into registro values (null, '723', now(), 1),
							(null, '654', now(), 1),
							(null, '735', now(), 1),
							(null, '832', now(), 1),
							(null, '673', now(), 1),
							(null, '512', now(), 1),
							(null, '752', now(), 1),
							(null, '890', now(), 1),
							(null, '932', now(), 1);
                            
insert into registro values(null, '520', now(), 1);

insert into registro values(null, '950', now(), 1);

