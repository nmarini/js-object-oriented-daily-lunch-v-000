
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0
let customerId = 0
let mealId = 0
let deliverId = 0

class Neighborhood{
  constructor(name){
    this.id = ++neighborhoodId;
    this.name = name;
    store.neighborhoods.push(this);
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

class Customer{
  constructor(name, neighborhoodId){
    this.id = ++customerId;
    this.name = name;
    this.neighborhoodId = neighborhoodId

    store.customers.push(this)
  }

  deliveries(){
    return
  }

  meals(){
    return
  }

  totalSpent(){
    return
  }
}

class Meal{
  constructor(title, price){
    this.id = ++mealId;
    this.title = title;
    this.price = price;

    store.meal.push(this);
  }

  deliveries(){
    return
  }

  customers(){
    return
  }

  byPrice(){
    return
  }

}

class Delivery{
  constructor(mealId, neighborhoodId, customerId){
    this.id = ++deliverId;
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;

    store.deliveries.push(this);
  }

  meals(){
    return
  }

  customers(){
    return
  }

  neighborhoods(){
    return
  }
}
