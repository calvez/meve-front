const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://magyaremlekekert.hu",
      "title": "Magyar Emlékekért a Világban",
      "description": "WordPress installation for Frontity development"
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
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://magyaremlekekert.hu"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
