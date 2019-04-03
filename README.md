### GraphQL-Server

## Install Dependencies
`npm install`

## Start up your server
`npm run dockerStart`

## Deploy Prisma
`npm run deploy`

## Seed the Database
`npm run load`

## Start your playground
`npm start`

![run](img/run.png)

*Server is running on http://localhost:4000*

![playground start](img/playground.png)

### *check docs
![docs](img/docs.png)

# Using the Playground (examples)

## Query

### Show All Rocket Data
``` 
query allRocket {
  rockets {
    name
    country
    id
    cost
    payloadLeo
    payloadGto
    kgLeo
    kgGto
  }
} 
```

### Order Data by Cost
```
query costDESC{
  rockets(orderBy: cost_DESC) {
    id
    name
    cost
    country
  }
}
```

## Mutations

### Create a new rocket
```
mutation addRocket {
  createRocket(data: {
    name: "Falcon Heavy Expendible"
    country: "USA"
    cost: 150000000
    payloadLeo: 63800
    payloadGto: 26700
    kgLeo: 2351
    kgGto:5618
  })
  {
    name
    country
    id
    cost
    payloadLeo
    payloadGto
    kgLeo
    kgGto
  }
}
```

### Update an existing rocket
```
mutation Update{
  updateRocket(
    data: {
      country: "United States"
    }
    where: {
      id: "_________ID_________"
    }
  ) {
    id
    name
    country
  }
}
```

### Delete a rocket
```
mutation Delete{
  deleteRocket(where: {
    id: "_________ID_________"
  }) {
    id
    name
    country
    cost
    payloadLeo
    payloadGto
    kgLeo
    kgGto
  }
}
```


## Reset 
`npm run reset`