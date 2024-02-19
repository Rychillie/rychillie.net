const isMacOS =
  typeof window !== 'undefined' && /^(?=.*Macintosh)(?=.*Mac OS X).*$/.test(navigator.userAgent);

export default isMacOS;
