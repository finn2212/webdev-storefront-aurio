module.exports = {
  shopwareEndpoint: 'https://s23511.creoline.cloud',
  shopwareAccessToken: "SWSCUHZMWDM2TTLINJFXMKG3TW",
  shopwareApiClient: {
    // optional, allow to override the default settings
    timeout: 5000, // timeout limit in ms
  },
  shopwareDomainsAllowList: [
    "http://192.168.2.119",
    "home-5013243924.app-ionos.space",
    "home-5013137490.app-ionos.space",
    "https://s23511.creoline.cloud",
    "http://192.168.2.11"
  ],
  defaultLanguageCode: "de-DE",
};
