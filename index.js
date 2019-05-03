
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodIds = 0
let customerIds = 0
let mealIds = 0
let deliveryIds = 0

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
    const meals = this.deliveries().map(
      function(delivery){
        return delivery.meal()
      }
    )
    return [...new Set(meals)];
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
  }

    meals(){
      return this.deliveries().map(
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
    return store.deliveries.filter(
      function(delivery){
        return delivery.customerId === this.id
      }.bind(this)
    )

  customers(){
    const customers = this.deliveries().map(
      function(delivery){
        return delivery.customer()
      }
    )
    return [...new Set(customers)];
  }

  byPrice(){
    return
  }

}

// class Delivery{
//   constructor(mealId, neighborhoodId, customerId){
//     this.id = ++deliveryIds;
//     this.mealId = mealId;
//     this.neighborhoodId = neighborhoodId;
//     this.customerId = customerId;
//
//     store.deliveries.push(this);
//   }
//
//   meal(){
//     return store.meals.filter(
//       function(meal){
//         return meal.id === this.mealId
//       }.bind(this)
//     )
//   }
//
//   customer(){
//     return store.customers.filter(
//       function(customer){
//         return customer.id === this.customerId
//       }.bind(this)
//     )
//   }
//
//   neighborhood(){
//     return store.neighborhoods.filter(
//       function(neighborhood){
//         return neighborhood.id === this.neighborhoodId
//       }.bind(this)
//     )
//   }
// }
