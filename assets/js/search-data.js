// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: ":star::star::yum::star::star:",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-i-release-a-srpaper-list-repository",
          title: 'I release a SRpaper list repository.',
          description: "",
          section: "News",},{id: "news-i-earned-a-master-s-degree-in-aeronautics-amp-amp-astronautics-science-amp-amp-technology-from-national-university-of-defense-technology",
          title: 'I earned a master’s degree in Aeronautics &amp;amp;amp; Astronautics Science &amp;amp;amp; Technology from...',
          description: "",
          section: "News",},{id: "news-i-join-in-huawei-technologies-co-ltd-as-a-ai-software-engineer",
          title: 'I join in Huawei Technologies Co., Ltd. as a AI Software Engineer.',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
