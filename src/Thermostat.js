'use strict';

class Thermostat {
  
  constructor(temp=20) {
    this.temp = temp;
    this.MIN_TEMPERATURE = 10;
    this.powerSavingMode = true;
  }
  
  up(increase=1) {
    if (this.temp + increase > this.maxTemp()) {
      throw `Can't go above ${this.maxTemp()} degrees`;
    }
    this.temp += increase;
  }
  
  down(decrease=1) {
    if (this.temp - decrease < this.MIN_TEMPERATURE) {
      throw "Can't go below 10 degrees";
    }
    this.temp -= decrease;
  }

  turnOffPSM() {
    this.powerSavingMode = false;
  }

  turnOnPSM() {
    if (this.temp > 25) {
      this.temp = 25;
    }
    this.powerSavingMode = true;
  }

  maxTemp() {
    return this.powerSavingMode ? 25 : 32;  
  }

  reset() {
    this.temp = 20;
  }

  energyUsage() {
    if (this.temp < 18) {
        return "low-usage";
     } else if (this.temp <= 25) {
        return "medium-usage";
     } else if (this.temp > 25) {
        return "high-usage";
    }
  }
}