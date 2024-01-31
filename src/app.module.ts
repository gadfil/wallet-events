import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletModule } from './wallet/wallet.module';
import { ParserModule } from './parser/parser.module';
import { TokenModule } from './token/token.module';
import { MyConfigModule } from './config/config.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/config';

@Module({
  imports: [
    WalletModule,
    ParserModule,
    TokenModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
