var Person = function(name) {
    this.name = name;
  }
  
  var Developer = function(name, skills, yearsOfExperience) {
      Person.call(this, name);
  
      this.skills = skills;
      this.yearsOfExperience = yearsOfExperience;
  }
  
  var john = new Developer('John', 'JavaScript', 10);
  
  console.log( john );