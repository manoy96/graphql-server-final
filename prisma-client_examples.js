const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a new user called `Alice`
  const newUser = await prisma.createUser({ name: 'Alice' })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)

  const user = await prisma
  .user({ id: 'cjsnr4ozh008c0801p50w3b8e' })
  console.log(user)

  const usersCalledAlice = await prisma
  .users({
    where: {
      name: 'Alice'
    }
  })
  console.log(usersCalledAlice)

  const updatedUser = await prisma
  .updateUser({
    where: { id: 'cjsnrh30500ac0801qhkmcs43' },
    data: { name: 'Bobby' }
  })
  console.log(updatedUser)

  const deletedUser = await prisma
  .deleteUser({ id: 'cjsnr5g15008z0801ktn62qbh' })
  console.log(deletedUser)
}

main().catch(e => console.error(e))