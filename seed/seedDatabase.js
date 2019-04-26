const fs = require('fs')
const {
   GraphQLClient} = require('graphql-request')

const client = new GraphQLClient('http://localhost:4466')

const mutation = `mutation addRocket(

   $name: String!,
   $country: String!,
   $cost: Int!,
   $payloadLeo: Int,
   $payloadGto:Int,
   $kgLeo: Int,
   $kgGto: Int,
   $url: String
) {
    createRocket(data: {
      name: $name
      country: $country
      cost: $cost
      payloadLeo: $payloadLeo
      payloadGto: $payloadGto
      kgLeo: $kgLeo
      kgGto: $kgGto
      url: $url
    })
    {
      id
      name
      country
      cost
      payloadLeo
      payloadGto
      kgLeo
      kgGto
      url
    }
  }
`

const sampleFiles = ['rocket-data.json']

async function main(inputFile) {
   const content = fs.readFileSync(`./seed/${inputFile}`)
   const allRocket = JSON.parse(content)

   allRocket.forEach(async myRocket => {
      const variables = {
         name: myRocket.name,
         country: myRocket.country,
         cost: parseInt(myRocket.cost),
         payloadLeo: parseInt(myRocket.payloadLeo),
         payloadGto: parseInt(myRocket.payloadGto),
         kgLeo: parseInt(myRocket.kgLeo),
         kgGto: parseInt(myRocket.kgGto),
         url: myRocket.url,
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