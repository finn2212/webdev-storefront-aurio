module.exports = {
  shopwareEndpoint: 'http://localhost/',
	  shopwareAccessToken: "SWSCWXLXOVLMAMV6SNRZS2NWSG",
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
