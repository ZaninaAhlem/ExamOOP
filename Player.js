class Player {
    constructor(name) {
      if (!Player.isName(name)) throw new Error('Invalid Player name');
      this._name = name;
    }
  
    static isName(name) {
      return /^[a-zA-z\s]{2,}$/.test(name);
    }
  
    get name() {
      return this._name;
    }
    
    set name(newName) {
      this._name = newName;
    }
  
  }
  
  module.exports = Player;