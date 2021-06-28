import {
  BlockChainType,
  LocalSecretNetwork,
  LocalTerraNetwork,
} from 'types/network'
import BinanceChainPng from 'images/BinanceChain.png'
import EthereumPng from 'images/Ethereum.png'
import TerraPng from 'images/Terra.png'
import SecretNetworkPng from 'images/SecretNetwork.png'

const blockChainImage: Record<BlockChainType, string> = {
  [BlockChainType.bsc]: BinanceChainPng,
  [BlockChainType.ethereum]: EthereumPng,
  [BlockChainType.terra]: TerraPng,
  [BlockChainType.secret]: SecretNetworkPng,
}

const blockChainName: Record<BlockChainType, string> = {
  [BlockChainType.bsc]: 'BSC',
  [BlockChainType.ethereum]: 'Ethereum',
  [BlockChainType.terra]: 'Terra',
  [BlockChainType.secret]: 'Secret',
}

// what terra shuttle supply, https://github.com/terra-project/shuttle
// https://chainid.network/
const ETH_CHAINID = {
  ETH_MAIN: 1,
  ETH_ROPSTEN: 3,
  BSC_MAIN: 56,
  BSC_TEST: 97,
}

const INFURAID =
  process.env.REACT_APP_INFURAID || 'a2efa9feabf84deb8f4dc696adf8f360'

const TERRA_EXTENSION = 'https://terra.money/extension'
const BSC_EXTENSION =
  'https://chrome.google.com/webstore/detail/binance-chain-wallet/fhbohimaelbohpjbbldcngcnapndodjp?utm_source=chrome-ntp-icon'
const CHROME = 'https://google.com/chrome'

const TERRA_CHAIN_ID = {
  mainnet: 'columbus-4',
  testnet: 'bombay-0007',
}

const terra_networks: Record<'mainnet' | 'testnet', LocalTerraNetwork> = {
  mainnet: {
    mantle: 'https://mantle.terra.dev/',
    shuttle: {
      ethereum: 'terra13yxhrk08qvdf5zdc9ss5mwsg5sf7zva9xrgwgc',
      bsc: 'terra1g6llg3zed35nd3mh9zx6n64tfw3z67w2c48tn2',
      secret: '',
    },
    fcd: 'https://fcd.terra.dev',
    lcd: 'https://lcd.terra.dev',
  },
  testnet: {
    mantle: 'https://tequila-mantle.terra.dev/',
    shuttle: {
      ethereum: '', // not yet
      bsc: '', // not yet
      secret: 'terra16kqe0nvmn4j92u9m53aya4wr5t3fcggjjpp843',
    },
    fcd: 'https://bombay-fcd.terra.dev',
    lcd: 'https://bombay-lcd.terra.dev',
  },
}

const secret_networks: Record<'mainnet' | 'testnet', LocalSecretNetwork> = {
  mainnet: {
    chainID: 'secret-2',
    bridge: '',
    apiUrl: '',
  },
  testnet: {
    chainID: 'holodeck-2',
    bridge: 'secret19v4y8gtzrs6fr8e85pgmgj8lks2z2ykwudxcym',
    apiUrl: 'https://bootstrap.secrettestnet.io',
  },
}

const SHUTTLE_PAIRS = 'https://assets.terra.money/cw20/pairs.json'

const TERRA_WHITELIST = 'https://assets.terra.money/cw20/tokens.json'
const ETH_WHITELIST = 'https://assets.terra.money/shuttle/eth.json'
const BSC_WHITELIST = 'https://assets.terra.money/shuttle/bsc.json'

export default {
  blockChainImage,
  blockChainName,
  terra_networks,
  secret_networks,
  INFURAID,
  TERRA_CHAIN_ID,
  TERRA_EXTENSION,
  BSC_EXTENSION,
  CHROME,
  ETH_CHAINID,
  SHUTTLE_PAIRS,
  TERRA_WHITELIST,
  ETH_WHITELIST,
  BSC_WHITELIST,
}
