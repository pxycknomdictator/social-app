const _config = {
  url: import.meta.env.VITE_BASE_URL,
  cookieName: import.meta.env.VITE_COOKIE_NAME,
};

Object.freeze(_config);

export { _config };
