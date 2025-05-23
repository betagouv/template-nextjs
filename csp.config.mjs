const ContentSecurityPolicy = `
  default-src 'self' *.gouv.fr;
  img-src 'self' data: *.gouv.fr;
  script-src 'self' *.gouv.fr https://sentry.incubateur.net ${
    process.env.NODE_ENV !== "production" && "'unsafe-eval' 'unsafe-inline'" || ""
  };
  connect-src 'self' *.gouv.fr https://sentry.incubateur.net;
  frame-src 'self' *.gouv.fr;
  style-src 'self' 'unsafe-inline';
  font-src 'self' data: blob:;
`;

export default ContentSecurityPolicy;
