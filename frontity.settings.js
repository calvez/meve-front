const settings = {
  "name": "meve-frontend",
  "state": {
    "frontity": {
      "url": "https://magyaremlekekert.hu",
      "title": "Magyar Emlékekért a Világban",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
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
    {
      "name": "@frontity/yoast",
      "state": {
        "yoast": {
          "transformLinks": {
            "ignore": "^(wp-(json|admin|content|includes))|feed|comments|xmlrpc",
          },
        },
      },
    },
    {
      "name": "@frontity/google-analytics",
      "state": {
        "googleAnalytics": {
          "trackingId": "G-VRZMTH4H2Z",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
