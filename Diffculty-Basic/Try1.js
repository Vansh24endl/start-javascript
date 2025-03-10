function validateAge(age) {
    try {
        if (age < 0) {
            throw new Error("Age cannot be negative!");
        } else if (age < 18) {
            throw new Error("You must be at least 18 years old.");
        } else {
            console.log("Age is valid.");
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Test cases
validateAge(-5);  
validateAge(15);  
validateAge(25);  
