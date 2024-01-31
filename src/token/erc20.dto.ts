import { FungibleToken } from './types';

export class Erc20Dto implements FungibleToken {
  chainId: number;
  type: 'ERC20';
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
}
