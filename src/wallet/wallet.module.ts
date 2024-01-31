import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { MyConfigModule } from '../config/config.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [WalletService],
  controllers: [WalletController],
  imports: [HttpModule, MyConfigModule],
  exports: [WalletService],
})
export class WalletModule {}
