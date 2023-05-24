module.exports = {
  shopwareEndpoint: 'https://26485.s15269.creoline.cloud',
	  shopwareAccessToken: "SWSCCGJXNTJGA2PVWVZFYNB5RQ",
  shopwareApiClient: {
     // optional, allow to override the default settings
     timeout: 5000, // timeout limit in ms
   },
   shopwareDomainsAllowList: [
     "http://localhost:3000",
     "http://localhost:3000/de",
     "http://pwa=shop.com",
   ],
 };
