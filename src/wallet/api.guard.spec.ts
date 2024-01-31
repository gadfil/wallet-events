import { ApiGuard } from './api.guard';
import { ConfigService } from '@nestjs/config';
import { ExecutionContext } from '@nestjs/common';

describe('ApiGuard', () => {
  let apiGuard: ApiGuard;
  let configService: ConfigService;
  beforeEach(() => {
    configService = {
      get: jest.fn(),
    } as any;
    apiGuard = new ApiGuard(configService);
  });

  it('should allow access with correct API key', () => {
    const context: ExecutionContext = {
      switchToHttp: () => ({
        getRequest: () => ({
          headers: { 'x-api-key': 'correct_api_key' },
        }),
      }),
    } as any;

    const spyGet = jest.spyOn(configService, 'get');
    spyGet.mockReturnValue('correct_api_key');

    const result = apiGuard.canActivate(context);

    expect(result).toBeTruthy();
    expect(spyGet).toHaveBeenCalledWith('API_KEY');
    spyGet.mockRestore();
  });

  it('should deny access with incorrect API key', () => {
    const context: ExecutionContext = {
      switchToHttp: () => ({
        getRequest: () => ({
          headers: { 'x-api-key': 'incorrect_api_key' },
        }),
      }),
    } as any;

    const spyGet = jest.spyOn(configService, 'get');
    spyGet.mockReturnValue('correct_api_key');

    const result = apiGuard.canActivate(context);

    expect(result).toBeFalsy();
    expect(spyGet).toHaveBeenCalledWith('API_KEY');
    spyGet.mockRestore();
  });
});
