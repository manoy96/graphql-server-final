const fs = require('fs')
const {
   GraphQLClient
} = require('graphql-request')

const client = new GraphQLClient('http://localhost:4466')

const mutation = `mutation addRocket(

   $name: String
   $cost: Int
   $id: ID! @unique
   $payloadLeo: Int
   $payloadGto:Int
   $kgLeo: Int
   $kgGto: Int
) {
    createRocket(data: {
      name: String
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
   const allPokemon = JSON.parse(content)

   allPokemon.forEach(async item => {
      const variables = {
         name: item.name,
         height: item.height,
         weight: item.weight,
         url: item.url,
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