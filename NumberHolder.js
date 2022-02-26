class NumberHolder{

	 hasRepeatingDigits=(num) => {
		for (i = 0; i < num.length() - 1; i++) {
			for (j = i + 1; j < num.length(); j++) {
				if (num.charAt(i) == num.charAt(j)) {
					return true;
				}
			}
		}
		return false;
	}


    produceRandomTarget = () => {
		let randomNumber = 1000 + parseInt((Math.random() * 10000) % 9000);
		let chosenNum = randomNumber.toString();
		while (this.hasRepeatingDigits(chosenNum)) {
			produceRandomTarget();
		}
		return chosenNum;
	}

	containsNonDigits = (num) => {
		if (!num.matches("^[0-9]+$")) {
			return true;
		}
		return false;
	}
}

module.exports = NumberHolder