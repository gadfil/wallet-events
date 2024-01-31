import { Injectable, Logger } from '@nestjs/common';
import { ethers } from 'ethers';
import Web3 from 'web3';
import { ConfigService } from '@nestjs/config';
import { WalletService } from '../wallet/wallet.service';

@Injectable()
export class ParserService {
  private readonly provider: ethers.providers.JsonRpcProvider;
  // private readonly web3: Web3;
  private readonly logger = new Logger(ParserService.name);

  contracts = {
    erc20: '0xa9059cbb',
  };
  constructor(
    private readonly configService: ConfigService,
    private readonly walletService: WalletService,
  ) {
    ///todo: move to rpc config
    this.logger.log(`constructor: `);

    this.provider = new ethers.providers.JsonRpcProvider(
      configService.get<string>('RPC_URL'),
    );
    // this.logger.log(`provider: ${JSON.stringify(this.provider)}`);
  }

  async onModuleInit() {
    this.logger.log(`onModuleIniwt`);
    //1. check if eth transfer
    //2. check if erc20 transfer
    //3. check if erc721 transfer maybe
    try {
      const block = await this.provider.getBlockWithTransactions(19096848);
      const wallets = await this.walletService.getAllWallets();
      this.logger.log(`wallets: ${JSON.stringify(wallets)}`);
      // this.logger.log(`block: ${JSON.stringify(block)}`);
      const tx = await this.provider.getTransaction(
        '0xab6fc90104571d8fe206f580fa6f20741a965b10d34376a7cfc17c14c5438c9d',
      );
      this.logger.log(`tx: ${JSON.stringify(tx)}`);
    } catch (e) {
      this.logger.log(`error: ${e}`);
    }
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
