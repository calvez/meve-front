const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://magyaremlekekert.hu",
      "title": "Magyar Emlékekért a Világban",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        },
        "source": {
          "url": "https://api.magyaremlekekert.hu",
        },
      },
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://api.magyaremlekekert.hu"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
