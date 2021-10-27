const resetTemp = document.getElementById("reset-temp");
const increaseTemp = document.getElementById("increase-temp");
const decreaseTemp = document.getElementById("decrease-temp");
const displayTemp = document.getElementById("temp-val");
const psmOn = document.getElementById("psm-on");
const psmOff = document.getElementById("psm-off");

const thermostat = new Thermostat();

updateTempText();

increaseTemp.addEventListener("click", (e) => {
  thermostat.up();
  updateTempText();
});

decreaseTemp.addEventListener("click", (e) => {
  thermostat.down();
  updateTempText()
})

resetTemp.addEventListener("click", (e) => {
  thermostat.reset();
  updateTempText()
})

psmOn.addEventListener('click', e => {
  thermostat.turnOnPSM();
  updateTempText()
});
psmOff.addEventListener('click', e => thermostat.turnOffPSM());

function updateTempText() {
  displayTemp.textContent = thermostat.temp;
}