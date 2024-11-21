function calculateAge(birthYear) {
    var currentyear = new Date() .getFullYear();
    var age = currentyear - birthYear;
    return age;
}

console.log(calculateAge(1994))
