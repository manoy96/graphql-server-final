const fs = require('fs')
const {
   GraphQLClient
} = require('graphql-request')

const client = new GraphQLClient('http://localhost:4466')

const mutation = `mutation addRocket(

   $name: String
   $country: String
   $cost: Int
   $id: ID! @unique
   $payloadLeo: Int
   $payloadGto:Int
   $kgLeo: Int
   $kgGto: Int
) {
    createRocket(data: {
      name: String
      country: String
      cost: Int
      id: ID! @unique
      payloadLeo: Int
      payloadGto:Int
      kgLeo: Int
      kgGto: Int
    })
    {
      id
    }
  }
`

const sampleFiles = ['pokemon-data.json']

async function main(inputFile) {
   const content = fs.readFileSync(`./seed/${inputFile}`)
   const allRocket = JSON.parse(content)

   allRocket.forEach(async item => {
      const variables = {
         name: item.name,
         country: item.country,
         cost: item.cost,
         id: item.id,
         payloadLeo: item.payloadLeo,
         payloadGto: item.payloadGto,
         kgLeo: item.kgLeo,
         kgGto: item.kgGto
      }

      await client
         .request(mutation, variables)
         .then(data => console.log(data))
         .catch(err => console.log(`${err}`))
   })

}

for (let fileName of sampleFiles) {
   main(fileName).catch(e => console.error(e))
}