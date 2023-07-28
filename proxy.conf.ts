const PROXY_CONFIG = {
  "/reports": {
    target: "http://localhost:8091",
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
    headers: {
      Connection: "keep-alive",
    },
  },
  "/bmg": {
    target: "https://mobile.esolutions.co.zw",
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
  },
};

module.exports = PROXY_CONFIG;
