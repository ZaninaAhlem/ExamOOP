const prompt = require('prompt');

const NumberHolder = require("./NumberHolder");
const player = require("./Player");

class CowsBulls{
    static COWS_BULLS_STATUS = {
        COWS: 0,
        BULLS: 0,
        GUESSES: 0,
        IS_CORRECT: true
    };

    constructor(){
        this._player = player
        this._secretNumber = NumberHolder.produceRandomTarget
        this._cowBullsStatus = CowsBulls.COWS_BULLS_STATUS
        this._guessedNumber = ""
    }
    
    computeBulls = (num1, num2) => {
		let bullCounter = 0;
        
		for (let i = 0; i < num1.length; i++) {
			if (num1.charAt(i) == num2.charAt(i)) {
				bullCounter++;
			}
		}
		return bullCounter;
	}

	computeCows = (num1, num2) => {
		let cowsCounter = 0;
		for (let i = 0; i < num1.length; i++) {
			for (let j = 0; j < num2.length; j++) {
				if (i != j) {
					if (num1.charAt(i) == num2.charAt(j)) {
						cowsCounter++;
					}
				}
			}
		}
		return cowsCounter;
	}

    start(){
        while (this._cowBullsStatus.IS_CORRECT) {

            this._guessedNumber = prompt.get("Enter guess number " + this._cowBullsStatus.GUESSES + ": ")
            this._cowBullsStatus.BULLS = this.computeBulls(this._guessedNumber, this._secretNumber)
            this._cowBullsStatus.COWS = this.computeCows(this._guessedNumber, this._secretNumber)

            if (this._cowBullsStatus.GUESSES >= 10) {
                console.log("Bulls = " + this._cowBullsStatus.BULLS + "\tCows = " + this._cowBullsStatus.COWS);
                console.log("Sorry! You ran out of guesses.");
                console.log("The correct number was: " + this._secretNumber);
                this._cowBullsStatus.IS_CORRECT = false;
            } else if (NumberHolder.hasRepeatingDigits(this._guessedNumber)) {
                console.log("Your guess should not contain repeating digits.");
            } else if (this._guessedNumber.length() != 4) {
                console.log("Your guess should contain 4 symbols (Digits)");
            } else if (NumberHolder.containsNonDigits(this._guessedNumber)) {
                console.log("Your guess should not contain non-digits.");
            } else if (this._cowBullsStatus.BULLS== 4) {
                console.log("Bulls = " + this._cowBullsStatus.BULLS + "\tCows = " + this._cowBullsStatus.COWS);
                console.log("Congratulations! You won with " + this._cowBullsStatus.GUESSES + " guesses.");
                this._cowBullsStatus.IS_CORRECT = false;
            } else if (!NumberHolder.hasRepeatingDigits(this._guessedNumber) && !NumberHolder.containsNonDigits(this._guessedNumber)) {
                console.log("Bulls = " + this._cowBullsStatus.BULLS + "\tCows = " + this._cowBullsStatus.COWS);
                this._cowBullsStatus.GUESSES++;
            }
        }
    }
}

module.exports = CowsBulls