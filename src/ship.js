class Ship {
  constructor({name, type, maxCrew, odometer = 0, fuelCapacity = 10, captain, parts = {}, readyToFly, notes}) {
      this.name = name;
      this.validTypes = ["military", "cargo", "passenger"];
      this.type = this.validTypes.includes(type) ? type : undefined;
      this.maxCrew = maxCrew;
      this.odometer = odometer;
      this.fuelCapacity = fuelCapacity;
      this.fuel = 0;
      this.captain = captain;
      this.crew = [];
      this.cargo = [];
      this.parts = parts;
    }

  addCrew(crewmember) {
    var remaining = this.maxCrew - this.crew.length;

	for(var i = 0; i < remaining; i++) {
   crewmember[i].isAlive === true && this.crew.push(crewmember[i]);
    }
  }

  loadCargo(cargo1) {
    (!!cargo1.type === true) && (this.cargo.push(cargo1));
  }

  updatePart(part) {
    part.type === undefined ? {} : this.parts[part.type] = part;
  }
}


module.exports = Ship;
