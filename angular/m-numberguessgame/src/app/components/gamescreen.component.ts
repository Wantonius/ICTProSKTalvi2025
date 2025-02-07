import {Component} from '@angular/core';
import {GameMechanics} from '../services/gamemechanics.service';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {Score} from '../models/score.model';
import {WinCondition} from '../models/wincondition.model';

@Component({
	selector:"gamescreen",
	standalone:true,
	imports:[FormsModule],
	templateUrl:"./gamescreen.component.html"
})
export class GameScreen {
	
	public guesses:number;
	public currentGuess:number;
	public currentHigh:number;
	public currentLow:number;
	public message:string;
	
	public constructor(private game:GameMechanics, private router:Router) {
		
		this.guesses = 0;
		this.currentLow = 1;
		this.currentHigh = 100;
		this.currentGuess = 0;
		this.message = "Please enter a number between 1 and 100"
	}
	
	guess() {
		if(Number.isNaN(this.currentGuess)) {
			this.message = "Please enter a NUMBER";
			return;
		}
		if(this.currentGuess > this.currentHigh) {
			this.message = "Guess was above current high guess. Try again!";
			return;
		}
		if(this.currentGuess < this.currentLow) {
			this.message = "Guess was below the current low guess. Try again!";
			return;
		}
		let temp:WinCondition = this.game.runGame(this.currentGuess);
		if(temp.type === "low") {
			this.message = "The guess was too low. Low limit now:"+this.currentGuess+". Guess again."
			this.guesses = temp.guesses;
			this.currentLow = this.currentGuess;
			this.currentGuess = 0;
			return;
		}
		if(temp.type === "high") {
			this.message = "The guess was too high. High limit now:"+this.currentGuess+". Guess again."
			this.guesses = temp.guesses;
			this.currentHigh = this.currentGuess;
			this.currentGuess = 0;
			return;
		}
		if(temp.type === "win") {
			alert("Congrats! You win in "+temp.guesses+" guesses");
			this.guesses = 0;
			this.currentLow = 0;
			this.currentHigh = 0;
			this.message = "Please enter a number between 1 and 100";
			this.router.navigate(["/start"])
		}
		
	}
}