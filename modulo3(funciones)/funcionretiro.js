function calculateAge(birthYear) {
    var currentyear = new Date() .getFullYear();
    var age = currentyear - birthYear;
    return age;
}

function yearsUntilRetirement(year, name) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(name + ' retires in ' + retirement + ' years.');
  }
  
  yearsUntilRetirement(1994, 'Karla');