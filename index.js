
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0
let customerId = 0
let mealId = 0
let deliverId = 0

class Neighborhood{
  constructor(name){
    this.name = name;
    store.neighborhoods.push(this)
  }
  deliveries(){
    return
  }

  customers(){
    return
  }

  meals(){
    return
  }
}
