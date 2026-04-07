function gonoVote(array) {

    // Step 1: input must be an array
    if (Array.isArray(array) === false) {
        return "Invalid";
    }

    // Step 2: count votes
    let haCount = 0;
    let naCount = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "ha") {
            haCount++;
        } 
        else if (array[i] === "na") {
            naCount++;
        }
    }

    // Step 3: compare results
    if (haCount > naCount) {
        return true;
    } 
    else if (haCount === naCount) {
        return "equal";
    } 
    else {
        return false;
    }
}

/* ===== TESTING (remove before submission) ===== */
console.log(gonoVote(["ha", "na", "ha", "na"])); // equal
console.log(gonoVote(["ha", "na", "na"]));       // false
console.log(gonoVote(["ha", "ha", "ha", "na"])); // true
console.log(gonoVote("ha, na"));                 // Invalid
console.log(gonoVote(12345));                    // Invalid
