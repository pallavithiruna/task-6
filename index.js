
//3.)Write a “person” class to hold all the details.
class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
  }
  // Create instances of the Person class
  const person1 = new Person('Francisca Rohan', 25, 'USA');
  const person2 = new Person('Raimond Aruna', 30, 'Netherlands');
  
  // Display details of person1
  console.log('Person-1 Details:');
  person1.displayDetails();
  
  // Display details of person2
  console.log('\nPerson-2 Details:');
  person2.displayDetails();

  
  //4.)write a class to calculate the uber price.
  class UberPricing {
    constructor(distance, duration) {
        this.baseFare = 2.50; // Base fare in dollars
        this.costPerMile = 1.50; // Cost per mile in dollars
        this.costPerMinute = 0.25; // Cost per minute in dollars
        this.distance = distance; // Distance in miles
        this.duration = duration; // Duration in minutes
    }

    calculatePrice() {
        const totalCost = this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
        return totalCost;
    }
}

// Example usage:
const distance = 5.2; // miles
const duration = 15; // minutes
const uberTrip = new UberPricing(distance, duration);
const price = uberTrip.calculatePrice();
console.log("The estimated price for the Uber ride is ₹", price.toFixed(2));
