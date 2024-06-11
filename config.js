var respecConfig = {
    specStatus: "unofficial",
    shortName: 'jolux',
    format: 'markdown', 
    latestVersion: null,
    maxTocLevel: 4,
    preProcess: [],
    postProcess: [window.respecMermaid.createFigures],
    github: {
      repoURL: "https://github.com/bequrios/jolux",
      branch: "main", // alternative branch
    },
    editors: [{
      name: "Jean-Louis Morard",
      company: "Federal Chancellery (FCh)",
      companyURL: "https://www.bk.admin.ch",
      url: "mailto:jean-louis.morard@bk.admin.ch"
    },
    {
      name: "Cédric Joseph",
      company: "Federal Chancellery (FCh)",
      companyURL: "https://www.bk.admin.ch",
      url: "mailto:cedric.joseph@bk.admin.ch"
    },
    {
      name: "Benedikt Hitz-Gamper",
      company: "Bern University of Applied Sciences (BFH)",
      companyURL: "https://www.bfh.ch",
      url: "mailto:benedikt.hitz@bfh.ch",
    }],
    logos: [
      {
        src: "img/logo.png",
        url: "https://www.bk.admin.ch/bk/en/home.html",
        alt: "Federal Chancellery (FCh)",
        width: 230,
        height: 58,
        id: "fch-logo",
      },
    ],
  };

module.exports = respecConfig
