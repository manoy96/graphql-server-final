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

### All Rockets
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

## Mutations

### Create a new rocket

### Update an existing rocket

### Delete a rocket



## Reset 
`npm run reset`