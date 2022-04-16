# Demo KendoReact UI

This demonstrates how to create a web application that uses:

* [KendoReact UI](https://www.telerik.com/kendo-react-ui/) components for calendars, grids, and more.

* [React](https://reactjs.org/) JavaScript web application framework

* [Yarn](https://yarnpkg.com) package manager

Related links:

* [KendoReact getting started repository](https://github.com/telerik/kendo-react-getting-started)

## Create React app

Use these links if you need them:

[Prerequisites](doc/prerequisties.md)

[Troubleshooting](doc/troubleshooting)

Create the demo by using Yarn:
 
```sh
yarn create react-app demo-kendo-react &&
cd demo-kendo-react &&
yarn start
```

Output:

```sh
Compiled successfully!

You can now view demo-kendo-react in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.235.89.154:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

webpack compiled successfully
```

The command should launch your browser and open the app home page at http://localhost:3000/

## Add our directories

Create our preferred documentation directories:

```sh
mkdir -p doc/{decisions,prerequisites,screenshots,troubleshooting}
touch doc/{decisions,prerequisites,screenshots,troubleshooting}/.keep
git add doc
git commit -m "Add documentation directories"
```

## Adjust for Kendo

See <https://www.telerik.com/kendo-react-ui/getting-started/>

Note that Create React App uses React functions, whereas the Kendo React UI getting started guide shows React components. Our demo prefers React functions over React components.

### Remove logo

Edit `App.js`. Delete the line that does the import of `logo.svg` and the line of JSX that renders the `img`.

Edit `App.css`. Delete the lines that reference `logo.svg`.

Delete `src/logo.svg`.

```sh
git add -A
git commit -m "Remove logo"
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
