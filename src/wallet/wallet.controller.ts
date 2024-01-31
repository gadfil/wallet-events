import { Controller, Logger, UseGuards } from '@nestjs/common';
import { ApiGuard } from './api.guard';
import { WalletService } from './wallet.service';

@Controller('wallet')
@UseGuards(ApiGuard)
export class WalletController {
  private readonly logger = new Logger(WalletController.name);
  constructor(private readonly walletService: WalletService) {}
}
