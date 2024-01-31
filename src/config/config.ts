export type NestConfig = {
  port: number;
};
export type AppConfig = {
  /**
   * [optionalParam] api key for auth in this instance of app
   */
  apiSecretKey?: string;
  /**
   * if true, this app will be used as backend for wallet like app
   */
  useAsBackend: boolean;
  /**
   * url to get wallets from other app or other instance of this app
   */
  walletsAPiUrl?: string;

  /**
   *  [optionalParam] api key for auth in wallets api
   */
  walletsApiSecretKey?: string;
};
export default () => ({
  nest: { port: parseInt(process.env.PORT, 10) || 3000 },
  app: {
    useAsBackend: process.env.USE_AS_BACKEND_FOR_WALLET_APP === 'true',
    walletsAPiUrl: process.env.GET_WALLETS_API,
    walletsApiSecretKey: process.env.GET_WALLETS_API_SECRET_KEY,
    apiSecretKey: process.env.API_SECRET_KEY,
  },
});
