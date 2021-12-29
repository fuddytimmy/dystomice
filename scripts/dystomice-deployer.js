async function main() {
  
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  DysToken = await ethers.getContractFactory("DysToken");
  dys = await DysToken.deploy();
  
  console.log("DysToken address:", dys.address);

  DystoMice = await ethers.getContractFactory("DystoMice");

  mice = await DystoMice.deploy(
    "DystoMice", 
    "DYSTOMICE", 
    "ipfs://QmXHaUaMwr7hPsKZvLkZhKznvjqx1pZphAEo85BzzgyWPs/", 
    dys.address);

  console.log("DystoMice address:", mice.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});