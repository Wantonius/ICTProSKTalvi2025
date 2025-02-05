import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector:"person-list",
	standalone:true,
	imports:[CommonModule],
	templateUrl:"./personlist.component.html"
})
export class PersonList {
	list = [
	{
		"firstname": "Claudia",
		"lastname": "Alston"
	},
	{
		"firstname": "Abraham",
		"lastname": "Craft"
	},
	{
		"firstname": "Damian",
		"lastname": "Waller"
	},
	{
		"firstname": "Rigel",
		"lastname": "Mack"
	},
	{
		"firstname": "Courtney",
		"lastname": "Baldwin"
	},
	{
		"firstname": "Reuben",
		"lastname": "Vargas"
	},
	{
		"firstname": "Miriam",
		"lastname": "Sampson"
	},
	{
		"firstname": "Lester",
		"lastname": "Kirk"
	},
	{
		"firstname": "Martena",
		"lastname": "Larsen"
	},
	{
		"firstname": "Len",
		"lastname": "Chapman"
	},
	{
		"firstname": "Rajah",
		"lastname": "Heath"
	},
	{
		"firstname": "Dara",
		"lastname": "Gaines"
	},
	{
		"firstname": "Jack",
		"lastname": "Duncan"
	},
	{
		"firstname": "Ferdinand",
		"lastname": "Noble"
	},
	{
		"firstname": "Lucy",
		"lastname": "Key"
	},
	{
		"firstname": "Fallon",
		"lastname": "Roman"
	},
	{
		"firstname": "Connor",
		"lastname": "Stafford"
	},
	{
		"firstname": "Kuame",
		"lastname": "Mccall"
	},
	{
		"firstname": "Georgia",
		"lastname": "Battle"
	},
	{
		"firstname": "Ima",
		"lastname": "Tyson"
	},
	{
		"firstname": "Jason",
		"lastname": "Cote"
	},
	{
		"firstname": "Victoria",
		"lastname": "Dorsey"
	},
	{
		"firstname": "Mollie",
		"lastname": "Gilliam"
	},
	{
		"firstname": "Aristotle",
		"lastname": "Ball"
	},
	{
		"firstname": "Hector",
		"lastname": "Rowe"
	},
	{
		"firstname": "Brock",
		"lastname": "Parks"
	},
	{
		"firstname": "TaShya",
		"lastname": "Knapp"
	},
	{
		"firstname": "Ramona",
		"lastname": "Dickson"
	},
	{
		"firstname": "Darryl",
		"lastname": "Barry"
	},
	{
		"firstname": "Olivia",
		"lastname": "Chambers"
	},
	{
		"firstname": "Kim",
		"lastname": "Russo"
	},
	{
		"firstname": "Kellie",
		"lastname": "Workman"
	},
	{
		"firstname": "Neil",
		"lastname": "Hendrix"
	},
	{
		"firstname": "Tashya",
		"lastname": "Hernandez"
	},
	{
		"firstname": "Zia",
		"lastname": "Spencer"
	},
	{
		"firstname": "Kyle",
		"lastname": "Dejesus"
	},
	{
		"firstname": "Rigel",
		"lastname": "Haley"
	},
	{
		"firstname": "Reese",
		"lastname": "Pugh"
	},
	{
		"firstname": "Erich",
		"lastname": "Welch"
	},
	{
		"firstname": "Holly",
		"lastname": "Monroe"
	},
	{
		"firstname": "Vernon",
		"lastname": "Thornton"
	},
	{
		"firstname": "Caryn",
		"lastname": "Moses"
	},
	{
		"firstname": "Raymond",
		"lastname": "Wilder"
	},
	{
		"firstname": "Jorden",
		"lastname": "Mcintosh"
	},
	{
		"firstname": "Halee",
		"lastname": "Gilmore"
	},
	{
		"firstname": "Kaseem",
		"lastname": "Tyson"
	},
	{
		"firstname": "Nicholas",
		"lastname": "Jackson"
	},
	{
		"firstname": "Harriet",
		"lastname": "Kane"
	},
	{
		"firstname": "Xaviera",
		"lastname": "Carpenter"
	},
	{
		"firstname": "Lyle",
		"lastname": "Trevino"
	},
	{
		"firstname": "Tyler",
		"lastname": "Finch"
	},
	{
		"firstname": "Jesse",
		"lastname": "Dunlap"
	},
	{
		"firstname": "Ignacia",
		"lastname": "Cole"
	},
	{
		"firstname": "Harper",
		"lastname": "Shelton"
	},
	{
		"firstname": "Fuller",
		"lastname": "Bullock"
	},
	{
		"firstname": "Ursula",
		"lastname": "Cochran"
	},
	{
		"firstname": "Veronica",
		"lastname": "Sweeney"
	},
	{
		"firstname": "Xenos",
		"lastname": "Elliott"
	},
	{
		"firstname": "Tucker",
		"lastname": "Galloway"
	},
	{
		"firstname": "Chandler",
		"lastname": "Blevins"
	},
	{
		"firstname": "Dawn",
		"lastname": "Stewart"
	},
	{
		"firstname": "Vernon",
		"lastname": "Lucas"
	},
	{
		"firstname": "Xander",
		"lastname": "Harvey"
	},
	{
		"firstname": "Chase",
		"lastname": "Emerson"
	},
	{
		"firstname": "Maya",
		"lastname": "Chandler"
	},
	{
		"firstname": "Lunea",
		"lastname": "Lamb"
	},
	{
		"firstname": "Shannon",
		"lastname": "Winters"
	},
	{
		"firstname": "Christian",
		"lastname": "Norton"
	},
	{
		"firstname": "Craig",
		"lastname": "Stanley"
	},
	{
		"firstname": "Ferdinand",
		"lastname": "Marsh"
	},
	{
		"firstname": "Jane",
		"lastname": "Hardin"
	},
	{
		"firstname": "Fiona",
		"lastname": "Benson"
	},
	{
		"firstname": "Lester",
		"lastname": "Mcknight"
	},
	{
		"firstname": "Orson",
		"lastname": "Willis"
	},
	{
		"firstname": "Tyrone",
		"lastname": "Richmond"
	},
	{
		"firstname": "Deirdre",
		"lastname": "Jackson"
	},
	{
		"firstname": "Kelly",
		"lastname": "Clark"
	},
	{
		"firstname": "Laith",
		"lastname": "Steele"
	},
	{
		"firstname": "Christopher",
		"lastname": "Fletcher"
	},
	{
		"firstname": "Kelly",
		"lastname": "Albert"
	},
	{
		"firstname": "Oliver",
		"lastname": "Morse"
	},
	{
		"firstname": "Tashya",
		"lastname": "Salazar"
	},
	{
		"firstname": "Hayden",
		"lastname": "O'brien"
	},
	{
		"firstname": "Fletcher",
		"lastname": "Ball"
	},
	{
		"firstname": "Jenna",
		"lastname": "Townsend"
	},
	{
		"firstname": "Troy",
		"lastname": "Gaines"
	},
	{
		"firstname": "Sybil",
		"lastname": "Garrison"
	},
	{
		"firstname": "Brett",
		"lastname": "Chase"
	},
	{
		"firstname": "Karyn",
		"lastname": "Boyle"
	},
	{
		"firstname": "Amity",
		"lastname": "Mcdonald"
	},
	{
		"firstname": "Addison",
		"lastname": "Buckner"
	},
	{
		"firstname": "Germane",
		"lastname": "Bowers"
	},
	{
		"firstname": "Adara",
		"lastname": "Nicholson"
	},
	{
		"firstname": "Mari",
		"lastname": "Baldwin"
	},
	{
		"firstname": "Price",
		"lastname": "Fulton"
	},
	{
		"firstname": "Ori",
		"lastname": "Leonard"
	},
	{
		"firstname": "Charity",
		"lastname": "Gillespie"
	},
	{
		"firstname": "Gage",
		"lastname": "Buchanan"
	},
	{
		"firstname": "Velma",
		"lastname": "Merrill"
	},
	{
		"firstname": "Uma",
		"lastname": "Valenzuela"
	}
]
}