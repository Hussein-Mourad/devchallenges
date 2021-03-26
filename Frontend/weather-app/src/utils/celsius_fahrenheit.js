function celsius_fahrenheit(deg, unit) {
    if (unit === "F") return parseInt((deg * 9) / 5 + 32);
    else return parseInt(deg);
}

export default celsius_fahrenheit;
