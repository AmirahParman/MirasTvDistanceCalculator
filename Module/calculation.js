export const distanceFormula = 1.2;

//to calculate TV size
export function tvSizeCalculator(idealDistance) {
    return idealDistance / distanceFormula;
}

//to calculate distance
export function distanceLengthCalculator(idealSize) {
    return idealSize * distanceFormula;
}