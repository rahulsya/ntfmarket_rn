const config = {
  screens: {
    Home: 'home',
    'Detail Item': {
      path: 'detailitem/:id',
      parse: {
        id: id => `${id}`,
      },
    },
  },
};

export default linking = {
  prefixes: ['nftmarket://', 'https://rahulsya.github.io'],
  config,
};
