interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Map',
  siteUrl: 'https://cuijianzhuang.com',
  logo: 'https://avatars.githubusercontent.com/u/31424401?v=4',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'HomePage',
      url: 'https://cuijianzhuang.com',
    },
    {
      name: 'About',
      url: 'https://github.com/cuijianzhuang',
    },
  ],
};

export default data;
