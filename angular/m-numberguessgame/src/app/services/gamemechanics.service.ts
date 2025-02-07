import {Injectable} from '@angular/core';
import {WinCondition} from '../models/wincondition.model';
import {Score} from '../models/score.model';

@Injectable({
	providedIn:"root"
})
export class GameMechanics {
	
	private currentTarget:number = 0;
	private topList:Score[] = [];
	private numberOfGuesses:number = 0;
	private playerName:string = "";

	startGame(name:string) {
		let temp = localStorage.getItem("toplist");
		if(temp) {
			this.topList = JSON.parse(temp);
		} else {
			this.topList = []
		}
		this.playerName = name;
		this.numberOfGuesses = 0;
		this.currentTarget = Math.floor(Math.random()*100)+1;
	}
	
	runGame(guess:number):WinCondition {
		this.numberOfGuesses++;
		if(guess > this.currentTarget) {
			return {
				type:"high",
				guesses:this.numberOfGuesses
			}
		}
		if(guess < this.currentTarget) {
			return {
				type:"low",
				guesses:this.numberOfGuesses
			}
		}
		if(guess === this.currentTarget) {
			this.topList.push({
				name:this.playerName,
				score:this.numberOfGuesses
			})
			this.topList = this.sortTopList(this.topList);
			localStorage.setItem("toplist",JSON.stringify(this.topList));
			this.playerName = "";
			this.currentTarget = 0;
			let winObject = {
				type:"win",
				guesses:this.numberOfGuesses
			}
			this.numberOfGuesses = 0;
			return winObject;
		}
		return {
			type:"",
			guesses:0
		}
	}
	
	sortTopList(inputArray:any) {
		let len = inputArray.length-1;
		for(let i=0;i<len;i++) {
			for(let j=0;j<len;j++) {
				if(inputArray[j].score > inputArray[j+1].score) {
					let tmp = inputArray[j];
					inputArray[j] = inputArray[j+1];
					inputArray[j+1] = tmp;
				}
			}
		}
		return inputArray;
	}

}