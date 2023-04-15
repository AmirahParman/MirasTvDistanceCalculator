const distanceFormula = 1.2;

//to calculate TV size
function tvSizeCalculator(idealDistance) {
    return idealDistance / distanceFormula;
}

//to calculate distance
function distanceLengthCalculator(idealSize) {
    return idealSize * distanceFormula;
}

function convertMetersToInches(valueInMetres) {
    return valueInMetres * 39.37;
}

function convertInchToMeter(valueInIches) {
    return valueInIches * 0.0254;
}

function calculatedTv() {
    let sofaInputTextBox = document.getElementById("SofaInput");
    let sofaDistance = sofaInputTextBox.value;

    let tvSize = tvSizeCalculator(sofaDistance);

    let convertedTvSize = Math.round(convertMetersToInches(tvSize));

    document.getElementById("tvSizeInput").value = convertedTvSize;

    updateCouchDistanceInDiagram(sofaDistance);
    updateCouchDistanceDiagramInch(convertMetersToInches(sofaDistance).toFixed(2));
    updateTvSizeInDiagram(convertedTvSize);
}


function calculatedDistance() {
    let tvInputTextBox = document.getElementById("tvSizeInput");
    let tvSizeInserted = tvInputTextBox.value;

    let distanceSofa = distanceLengthCalculator(tvSizeInserted);
    console.log('ideal distance should be:', distanceSofa);

    let convertedSofaDistance = convertInchToMeter(distanceSofa).toFixed(2);

    document.getElementById("SofaInput").value = convertedSofaDistance;

    updateCouchDistanceInDiagram(convertedSofaDistance);
    updateCouchDistanceDiagramInch(convertMetersToInches(convertedSofaDistance).toFixed(2));
    updateTvSizeInDiagram(tvSizeInserted);
}

function updateCouchDistanceInDiagram(newValue) {
    document.getElementById("metreDiagram").innerHTML = newValue;
}

function updateCouchDistanceDiagramInch(newValueIch) {
    document.getElementById("inchDiagramConvert").innerHTML= newValueIch
}

function updateTvSizeInDiagram(newValueTV){
    document.getElementById("inchTvDiagram").innerHTML= newValueTV;
}