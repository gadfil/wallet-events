import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AppConfig } from '../config/config';

@Injectable()
export class WalletService {
  readonly logger = new Logger(WalletService.name);
  readonly appConfig: AppConfig;
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.appConfig = this.configService.get<AppConfig>('app');
    // this.useAsBackend = this.configService.get<boolean>(
    //   'USE_AS_BACKEND_FOR_WALLET_APP',
    // );
    // this.walletsAPiUrl = this.configService.get<string>('GET_WALLETS_API');
    this.logger.log(`useAsBackend: ${this.appConfig.useAsBackend}`);
    this.logger.log(`walletsAPiUrl: ${this.appConfig.walletsAPiUrl}`);
  }

  async getAllWallets(): Promise<string[]> {
    if (this.appConfig.useAsBackend) {
      return [];
      // return this.getWalletsFromDB();
    } else {
      try {
        const headers =
          this.appConfig.walletsApiSecretKey !== undefined
            ? { 'x-api-key': this.appConfig.walletsApiSecretKey }
            : {};

        const { data } = await this.httpService
          .get<string[]>(this.appConfig.walletsAPiUrl, { headers })
          .toPromise();
        return data;
      } catch (e) {
        this.logger.error(e);
      }
      return [];
    }
  }
}
