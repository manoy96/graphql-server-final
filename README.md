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

### Specific Data
```
query myPayloadLeo {
	rockets{
    name 
    id 
    payloadLeo
  }
}
```

### Select One Item
```
query item {
  rockets(where: {
    id: "cjtt81cse01rc0774sv6uzgck"
  }) {
    id
    name
    cost
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
      id: "cjtt81cse01rc0774sv6uzgck"
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
    id: "cjtt81cse01rc0774sv6uzgck"
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