import {distanceFormula, tvSizeCalculator, distanceLengthCalculator} from "./Module/calculation.js"

attachEventListenersToTextBoxes();

function attachEventListenersToTextBoxes() {
    let sofaTextbox = document.getElementById('sofa-input');
    sofaTextbox.addEventListener('blur', calculatedTv);

    let tvTextbox = document.getElementById('tv-size-input');
    tvTextbox.addEventListener('blur', calculatedDistance);
}

function convertMetersToInches(valueInMetres) {
    return valueInMetres * 39.37;
}

function convertInchToMeter(valueInIches) {
    return valueInIches * 0.0254;
}

function calculatedTv() {
    let sofaInputTextBox = document.getElementById("sofa-input");
    let sofaDistance = sofaInputTextBox.value;

    let tvSize = tvSizeCalculator(sofaDistance);

    let convertedTvSize = Math.round(convertMetersToInches(tvSize));

    document.getElementById("tv-size-input").value = convertedTvSize;

    updateDiagram("metreDiagram", sofaDistance);
    updateDiagram("inchDiagramConvert", convertMetersToInches(sofaDistance).toFixed(2));
    updateDiagram("inchTvDiagram", convertedTvSize);
}

function calculatedDistance() {
    let tvInputTextBox = document.getElementById("tv-size-input");
    let tvSizeInserted = tvInputTextBox.value;

    let distanceSofa = distanceLengthCalculator(tvSizeInserted);
    console.log('ideal distance should be:', distanceSofa);

    let convertedSofaDistance = convertInchToMeter(distanceSofa).toFixed(2);

    document.getElementById("sofa-input").value = convertedSofaDistance;

    updateDiagram("metreDiagram", convertedSofaDistance);
    updateDiagram("inchDiagramConvert", convertMetersToInches(convertedSofaDistance).toFixed(2));
    updateDiagram("inchTvDiagram", tvSizeInserted);
}

function updateDiagram(idOfElement, newValue) {
    document.getElementById(idOfElement).innerHTML = newValue;
}