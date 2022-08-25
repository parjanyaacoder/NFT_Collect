const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } =  require("../constants");

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;
  const cryptoDevsContracts = await ethers.getContractFactory("CryptoDevs");
  const deployedCryptoDevsContract = await cryptoDevsContracts.deploy(
    metadataURL,
    whitelistContract
  );

  console.log("Crypto Devs Contract Address:", deployedCryptoDevsContract.address);

}

main()
.then(()=>process.exit(0))
.catch((error)=>{console.error();
process.exit(1);
})


