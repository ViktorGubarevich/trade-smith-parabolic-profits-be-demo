module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array(
      "6K08ZP8CmPm/XzVgXX+Gcw==, PzR7MTwMCybk8Ap2/rza1w==,vr7olbZjEu4aq7GQ0Mv/yQ==,v33B3zqDwMdOQQWf96isGA=="
    ),
  },
});
