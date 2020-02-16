# Burdigalax-project v4.6.0

Burdigalax project. 

# Quick installation GUI

DOWNLOAD Burdigalax Packages to install on your ONSET server.  
:warning: If you move these files in a package other than "burdigalax" be sure to rename imports of js files in HTML files.

[![Download](./download.svg "Download") Download Burdigalax package GUI v4.6.0.](https://github.com//Burdigalax/BurdigalaxGUI/raw/master/ONSET_SERVER.4.6.0.zip)

# Avanced Usage 

## Building and running on localhost

First install dependencies:

```sh
npm install
// or
yarn
```

To run in hot module reloading mode on localhost browser:

```sh
npm run start 
// or 
yarn start
```

To create a production build:

- Edit **config.js** file for specify your package server name.
```js
module.exports = {
  serverPackageName: "burdigalax"
};
```

- Execute build 
```sh
yarn build
```

## Installation on you server

- Copy generate files on folder `dist/` to your server to `{serverPackageName}/client/gui/`  
/!\ List of generated files to copy _(Exemple with onShop)_ : 
    - onShop.html
    - onShop.burdigalax.js
    - vendors.burdigalax.js
    - commons.burdigalax.js
    
- For **Onset** game declare this files on your `package.json` server. _(Exemple with onShop)_
```json
  "files": [
    "client/gui/onShop.html",
    "client/gui/onShop.burdigalax.js",
    "client/gui/vendors.burdigalax.js",
    "client/gui/commons.burdigalax.js",
  ]
```
The commons and vendors files are the same and mandatory for all BurdigalaxRP modules.

## onShop 

Readme : https://github.com/Burdigalax/BurdigalaxGUI/tree/master/src/app/onShop/README.md

## gasStation

Readme : https://github.com/Burdigalax/BurdigalaxGUI/tree/master/src/app/gasStation/README.md

## inventory

Readme : https://github.com/Burdigalax/BurdigalaxGUI/tree/master/src/app/inventory/README.md

### Contact
> Discord: RomBurdi#9770