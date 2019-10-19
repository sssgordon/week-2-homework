function groupAdultsByAgeRange(people) {
    //set up final object
    const grouping = {
        '20 and younger': [],
        '21-30': [],
        '31-40': [],
        '41-50': [],
        '51 and older': []
    }

    //filter and group
    const ageGroups = people
        .filter(person => person.age >= 18)
        .reduce((group, currentAdult) => {
            
            if (currentAdult.age <= 20) {
                group['20 and younger'].push(currentAdult)
                return group
            }

            if (currentAdult.age > 20 && currentAdult.age < 31) {
                group['21-30'].push(currentAdult)
                return group
            }

            if (currentAdult.age > 30 && currentAdult.age < 41) {
                group['31-40'].push(currentAdult)
                return group
            }

            if (currentAdult.age > 40 && currentAdult.age < 51) {
                group['41-50'].push(currentAdult)
                return group
            }

            if (currentAdult.age > 50) {
                group['51 and older'].push(currentAdult)
                return group
            }

            return group
        }, grouping)

    //delete empty age groups
    if (grouping['20 and younger'].length === 0) {
        delete grouping['20 and younger']
    }
    if (grouping['21-30'].length === 0) {
        delete grouping['21-30']
    }
    if (grouping['31-40'].length === 0) {
        delete grouping['31-40']
    }
    if (grouping['41-50'].length === 0) {
        delete grouping['41-50']
    }
    if (grouping['51 and older'].length === 0) {
        delete grouping['51 and older']
    }

    return ageGroups
}

module.exports = {groupAdultsByAgeRange}