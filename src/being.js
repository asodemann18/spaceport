class Being {
  constructor(name,species){
    this.isAlive = true;
    this.name = name;
    this.species = species;
    this.credits = 0;
  }

  updateCredits(newCredits){

  return this.credits = newCredits + this.credits;

  }
}

module.exports = Being;
