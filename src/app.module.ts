import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletModule } from './wallet/wallet.module';
import { ParserModule } from './parser/parser.module';

@Module({
  imports: [WalletModule, ParserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
