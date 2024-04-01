import { HardhatUserConfig } from "hardhat/config";
import '@chainlink/hardhat-chainlink';

const config: HardhatUserConfig = {
  chainlink: {
    node: {
      chain_id: "41", // Chain ID (default: "1337")
      chain_name: "Telos",
      http_url: "https://testnet15a.telos.net/evm",
      ws_url: "wss://testnet15a.telos.net/evm",
    }
  }
};

export default config;
