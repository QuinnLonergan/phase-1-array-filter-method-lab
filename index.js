function findMatching(driverArray, name){
    const matchingNames = (driverArray.filter(newNames => newNames.toLowerCase() == name.toLowerCase()))
    return matchingNames
}

function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.slice(0, name.length) === name)
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string)
}