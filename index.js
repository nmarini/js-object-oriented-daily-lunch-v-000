
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
    return store.deliveries.filter(
      function(delivery){
        return delivery.neighborhoodId === this.id
      }.bind(this)
    )
  }

  customers(){
    return store.customers.filter(
      function(customer){
        return customer.neighborhoodId === this.id
      }.bind(this)
    )
  }

  meals(){
    return store.deliveries().map(
      function(delivery){
        return delivery.meal()
      }
    )
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
    return store.deliveries.filter(
      function(delivery){
        return delivery.customerId === this.id
      }.bind(this)
    )

    meals(){
      return store.deliveries().map(
        function(delivery){
          return delivery.meal()
        }
      )
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

    store.meals.push(this);
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
  }

  meal(){
    return
  }

  customer(){
    return
  }

  neighborhood(){
    return
  }
}
