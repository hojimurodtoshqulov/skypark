module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    locales: ["ru", "uz", "en"],
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
  },
};
