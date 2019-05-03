
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodIds = 0
let customerIds = 0
let mealIds = 0
let deliverIds = 0

class Neighborhood{
  constructor(name){
    this.id = ++neighborhoodIds;
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
    this.id = ++customerIds;
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
    this.id = ++mealIds;
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
    this.id = ++deliverIds;
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;

    store.deliveries.push(this);
  }.bind(this)

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
