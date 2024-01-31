import { Injectable, Logger } from '@nestjs/common';
import { ethers } from 'ethers';
import Web3 from 'web3';

@Injectable()
export class ParserService {
  private readonly provider: ethers.providers.JsonRpcProvider;
  private readonly web3: Web3;
  private readonly logger = new Logger(ParserService.name);
  constructor() {
    ///todo: move to rpc config
    this.provider = new ethers.providers.JsonRpcProvider(
      'https://eth.llamarpc.com',
    );

    this.web3 = new Web3('https://eth.llamarpc.com');
  }

  wallets = [
    '0x00000000219ab540356cBB839Cbe05303d7705Fa',
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    '0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8',
    '0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf',
    '0x8315177aB297bA92A06054cE80a67Ed4DBd7ed3a',
    '0xF977814e90dA44bFA03b6295A0616a897441aceC',
    '0x8696e84aB5e78983f2456bCB5c199eEa9648C8C2',
    '0x1Db92e2EeBC8E0c075a02BeA49a2935BcD2dFCF4',
    '0x32400084C286CF3E17e7B677ea9583e60a000324',
    '0x28C6c06298d514Db089934071355E5743bf21d60',
    '0xF977814e90dA44bFA03b6295A0616a897441aceC',
    '0xcEe284F754E854890e311e3280b767F80797180d',
    '0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf',
  ];
  async onModuleInit() {
    const block = await this.provider.getBlockWithTransactions(19071497);
    const tx = await this.provider.getTransaction(
      '0x97e7da4baa516bbe6962da9babb5a14d3a8fc5d4cdb6e1934c76fe217db8bb24',
    );
    this.logger.log(`tx: ${JSON.stringify(tx)}`);

    // this.provider.on('block', async (blockNumber) => {
    //   const block = await this.provider.getBlockWithTransactions(blockNumber);
    //   // const wallets = await this.walletService.getAllWallets();
    //   // this.logger.log(`$wallets: ${JSON.stringify(wallets)}`);
    //   this.logger.log(``);
    //   this.logger.log(`########### block number: ${blockNumber}`);
    //   block.transactions.forEach((tx) => {
    //     // JSON.P(tx.data);
    //   });
    // });
  }
}
