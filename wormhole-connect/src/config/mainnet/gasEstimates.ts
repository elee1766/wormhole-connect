import { GasEstimates } from '../types';

export const MAINNET_GAS_ESTIMATES: GasEstimates = {
  ethereum: {
    sendNative: 100000,
    sendToken: 150000,
    sendNativeWithRelay: 200000,
    sendTokenWithRelay: 300000,
    sendCCTPWithRelay: 300000,
    sendCCTPManual: 150000,
    claim: 300000,
  },
  polygon: {
    sendNative: 100000,
    sendToken: 150000,
    sendNativeWithRelay: 200000,
    sendTokenWithRelay: 250000,
    claim: 300000,
  },
  bsc: {
    sendNative: 100000,
    sendToken: 200000,
    sendNativeWithRelay: 200000,
    sendTokenWithRelay: 300000,
    claim: 300000,
  },
  avalanche: {
    sendNative: 100000,
    sendToken: 150000,
    sendNativeWithRelay: 200000,
    sendTokenWithRelay: 300000,
    sendCCTPWithRelay: 300000,
    sendCCTPManual: 150000,
    claim: 300000,
  },
  fantom: {
    sendNative: 100000,
    sendToken: 150000,
    sendNativeWithRelay: 250000,
    sendTokenWithRelay: 300000,
    claim: 300000,
  },
  celo: {
    sendNative: 150000,
    sendToken: 150000,
    sendNativeWithRelay: 300000,
    sendTokenWithRelay: 300000,
    claim: 300000,
  },
  moonbeam: {
    sendNative: 100000,
    sendToken: 150000,
    sendNativeWithRelay: 200000,
    sendTokenWithRelay: 300000,
    claim: 300000,
  },
  solana: {
    sendNative: 15000,
    sendToken: 15000,
    claim: 25000,
  },
  sui: {
    sendNative: 5000000,
    sendToken: 5000000,
    sendNativeWithRelay: 5000000,
    sendTokenWithRelay: 5000000,
    claim: 200000000,
  },
  aptos: {
    sendNative: 40,
    sendToken: 40,
    claim: 1250,
  },
  sei: {
    claim: 1000000,
    sendToken: 1000000,
    sendNative: 1000000,
  },
  base: {
    claim: 1000000,
    sendNative: 1000000,
    sendToken: 1000000,
  },
  wormchain: {
    sendNative: 0,
    sendToken: 0,
    claim: 0,
  },
  osmosis: {
    sendNative: 0,
    sendToken: 0,
    claim: 0,
  },
};