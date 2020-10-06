const appTitle = "Azu's React Cert Challenge";

const homeTitle = 'Home';

const loginTitle = 'Log In';

const favoritesTitle = 'Favorite Videos';

const buildTitle = (pageTitle) => {
  const title = `${pageTitle} | ${appTitle}`;
  return title;
};

export { homeTitle, loginTitle, favoritesTitle, buildTitle };
