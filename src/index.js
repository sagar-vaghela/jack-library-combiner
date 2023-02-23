import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from 'ethers';

// process.env.multiChainRegistryAddress = false;

// Use the Thirdweb and ethers libraries here
console.log('ThirdwebSDK => inside index.js file =>', ThirdwebSDK);
console.log('ethers => inside index.js file =>', ethers);

window.ThirdwebSDK = ThirdwebSDK;
window.ethers = ethers;

// export { ThirdwebSDK };
// export { ethers };
