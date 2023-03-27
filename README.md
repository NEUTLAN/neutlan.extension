# Neutlan Chrome Extension

This repository contains the source code of the Neutlan Chrome Extension application. It is implemented with React and able to run on Chrome. Installation guide is provided accordingly.

## Setup

First, clonse the repository.

```
git clone git@github.com:NEUTLAN/neutlan.extension.git
cd neutlan.extension
```

Next, you need to build the project. Therefore, you need to have `npm`. You can install it by following [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) guide.

Now you are ready to build and deploy the application. Execute follwing commands seperately.

```
npm install
npm run build
```

Finally, you need to activate it for Chrome. Go to `chrome://extensions/` in Chrome browser and toggle to Developer mode. Then, click `Load unpacked` and select `build` file of the neutlan.extension
