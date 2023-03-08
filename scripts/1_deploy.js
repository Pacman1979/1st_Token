async function main() {
// Fetch contract to deploy
  const Token = await ethers.getContractFactory("Token")

// Deploy contract
  const token = await Token.deploy('Home', 'HOME', '100000000')
  await token.deployed()
  console.log(`Token Deployed to: ${token.address}`)
}
// call the function from above...
main()
  .then(() => process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exit(1);
});
