const temperature = {
    today: { min: 24, max: 48},
    tomorrow: {min: 23,  max: 45}
};

function secondAttempt(tempVariable) {
    const {tomorrow: {updatedTomorrowTemp} = tempVariable};
    return updatedTomorrowTemp;
}

console.log(secondAttempt(temperature))
