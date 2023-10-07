module.exports = {
  shopwareEndpoint: process.env.SHOPWARE_ENDPOINT,
  shopwareAccessToken: process.env.SHOPWARE_ACCESSTOKEN,
  pwaHost: process.env.PWA_HOST,
  shopwareDomainsAllowList: [
    "http://192.168.1.131:3000",
    "https://home-5014601030.app-ionos.space",
    "https://home-5014612057.app-ionos.space"
  ],
  defaultLanguageCode: "de-DE",
};
