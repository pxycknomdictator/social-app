const _config = {
  dbName: process.env.DATABASE_NAME,
  dbUrl: process.env.DATABASE_URL,
  jwtTokenKey: process.env.JWT_TOKEN_KEY,
  port: process.env.PORT,
  originUrl: process.env.ORIGIN,
};

Object.freeze(_config);

export { _config };
