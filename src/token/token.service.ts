import { Injectable } from '@nestjs/common';
import { tokens } from './ethereum-mainet';
import { FungibleToken } from './types';
@Injectable()
export class TokenService {
  tokenList: FungibleToken[];
  constructor() {
    /// todo: change to database
    this.tokenList = [...tokens];
  }
  getAllTokens() {
    return [];
  }

  getTokenListByChain(chainId: number) {
    switch (chainId) {
      case 1:
        return this.tokenList;
      default:
        return [];
    }
  }
}
