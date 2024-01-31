import { Module } from '@nestjs/common';
import { ParserService } from './parser.service';
import { WalletModule } from '../wallet/wallet.module';

@Module({
  providers: [ParserService],
  imports: [WalletModule],
})
export class ParserModule {}
