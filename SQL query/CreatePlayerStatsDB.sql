create database GameStats
go

use GamesStats
go

create table Games(
	GameID int primary key identity ,
	GameName nvarchar(30),
	Player1 nvarchar(30),
	Player2 nvarchar(30),
	Who_Won nvarchar(30)
	);
go

insert into Games values ('Taki', 'Splibob'  , 'Slpibib', 'Slpibib')
insert into Games values ('Taki', 'Splibob'  , 'Alex', 'Alex')
insert into Games values ('Taki', 'Splibob'  , 'Slpibib', 'Slpibib')
go