//Write a “person” class to hold all the details.
  
  class person {
    
    constructor(){
      var self = this;
          self.obj = {
              name : 'Zakir Shaikh',
              profession: 'developer',
              id: 1,
              btd: '31/03/1995',
              age: 27,
              nationality: 'India',
              gender: 'Male',
              hobby: 'cricket'
          }
    }
  }
  
  let information = new person().obj
  console.log(information);
  
  //write a class to calculate uber price.
  
  //Base Fare + (Cost per minute * time in ride) + (Cost per mile * ride distance) = Your Fare
  
  class uber {
    constructor(obj){
      var self = this;
      self.obj = obj
    }
    calculate() {
      var totalFare = 0,self=this;
      totalFare = self.obj.baseFare + parseInt(self.obj.perMin * self.obj.rideTime) + parseInt(self.obj.perKm * self.obj.rideKm);
      return totalFare.toFixed(2);
    } 
  }
  
  var getFare = new uber({
    baseFare: 48,
    perKm : 14.7,
    perMin : 1,
    rideKm : 10,
    rideTime : 32 //in min
  })
  
  console.log(getFare.calculate())
  
  