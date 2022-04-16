# Demo KendoReact UI

This demonstrates how to create a web application that uses:

* [KendoReact UI](https://www.telerik.com/kendo-react-ui/) components for calendars, grids, and more.

* [React](https://reactjs.org/) JavaScript web application framework.

* [ReactRouter](https://reactrouter.com/) routing library for links, navigation, URLs.

* [Yarn](https://yarnpkg.com) package manager for managing dependencies.

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

## Simplify: Replace App div

Edit `src/App.js`.

Replace the App div and its contents with this:

```js
<div className="App">
    <h1>Demo</h1>
</div>
```

```sh
git add -A
git commit -m "Replace App div"
```

### Simplify: Remove logo

Edit `App.js`. Delete the line that does the import of `logo.svg` and the line of JSX that renders the `img`.

Edit `App.css`. Delete the lines that reference `logo.svg`.

Delete `src/logo.svg`.

```sh
git add -A
git commit -m "Remove logo"
```

### Simplify: Remove App.css contents

Remove the contents of `src/App.css`:

```sh
echo "" > src/App.css
git add -A
git commit -m "Remove App.css contents"
```

### Result

The result is the file `App.js` with this code:

```js
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Demo</h1>
    </div>
  );
}

export default App;
```

## Add our directories

Create our preferred directories that we use on our typical projects:

```sh
mkdir -p doc/{decisions,prerequisites,screenshots,troubleshooting}
touch doc/{decisions,prerequisites,screenshots,troubleshooting}/.keep
git add doc
git commit -m "Add documentation directories"
```

## Add ReactRouter

[ReactRouter](https://reactrouter.com/) is a routing library for links, navigation, URLs. The demo uses a router to provide URLs for each demo component example. See [ReactRouter tutorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial).

### Add react-router-dom

Run:

```sh
yarn add react-router-dom@6
git add -A
git commit -m "Add react-router-dom@6"
```

### Create routes

Create a routes directory:

```sh
mkdir src/routes
touch src/routes/.keep
git add -A
git commit -m "Add routes directory"
```

### Create "Hello"

Create a route file `src/routes/hello.js` with this code:

```js
export default function Hello() {
  return (
    <main>
      <h2>Hello</h2>
    </main>
  );
}
```

```sh
git add -A
git commit -m "Add routes/hello"
```

### Add link

Edit `src/App.js`.

Use the `Link` component to create a link to the URL "/hello".

Use the `Outlet` component to nest routes.

```js
import './App.css';
import { 
  Link,
  Outlet,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Demo</h1>
      <nav>
        <Link to="/hello">Hello</Link>
      </nav>
      <Outlet />
    </div>
  );
}
```

```sh
git add -A
git commit -m "Add Link to /hello with an Outlet"
```

Browse <http://localhost:3000/> and you should see the web page that says "Demo" and shows the link "Hello".

### Update index.js

The first page we will work on is `src/index.js`. The `create-react-app` command created the file. 

The file has code like this:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Edit `src/index.js`.

Add imports:

```js
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Hello from './routes/hello';
```

Replace the `root.render` call with nested routes:

```js
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="hello" element={<Hello />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
```

Browse <http://localhost:3000/hello> and you should see a web page that says "Hello".

### Add a link

Edit `src/App.js`.

Add import:

```js
import { Link } from 'react-router-dom';
```

Add a link:

```js
<div className="App">
    <h1>Demo</h1>
    <Link to="/example">Example</Link> |{" "}
</div>
```

## Adjust for Kendo

See <https://www.telerik.com/kendo-react-ui/getting-started/>

Note that Create React App uses React functions, whereas the Kendo React UI getting started guide shows React components. Our demo prefers React functions over React components.


### Import Component

Add import line:

```js
import React, {Component} from 'react';
```

```sh
git add -A
git commit -m "Import Component"
```


## Add Kendo theme

Add the Kendo theme that is the default:

```sh
yarn add @progress/kendo-theme-default
```

Edit `src/App.js`. Import the CSS file immediately before your existing `App.css` import.

```js
import '@progress/kendo-theme-default/dist/all.css'
```

Kendo offers multiple themes: default, bootstrap, material. Kendo also enables
you to create your own theme. The KendoReact UI components enable you to change
your app look and feel by modifying a SASS file or CSS file, or even swap themes
for your entire app by changing a single import.

## Add Kendo licensing

Kendo requires a licensing package:

```sh
yarn add @progress/kendo-licensing
git add -A
git commit -m "Add Kendo licensing"
```

## Add KendoReact Globalization

[The KendoReact Globalization](https://www.telerik.com/kendo-react-ui/components/intl/) process combines the translation of component messages (localization) with their adaptation to specific cultures (internationalization).

[The KendoReact Internationalization (i18n)](https://www.telerik.com/kendo-react-ui/components/intl/i18n/) package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers.

[The KendoReact Localization (l10n)](https://www.telerik.com/kendo-react-ui/components/intl/l10n/) package enables you to adapt a component to a different locale by providing options for translating its messages or by enabling its right-to-left support.

```sh
yarn add @progress/kendo-react-intl
git add -A
git commit -m "Add KendoReact Globalization"
```

## Add KendoReact Calendar and dependencies

[The KendoReact Calendar](https://www.telerik.com/kendo-react-ui/components/dateinputs/calendar/) is a form component that represents a graphical Gregorian calendar and supports the selection of and navigation between dates and date ranges for scheduling appointments. 

[The KendoReact Date Inputs](https://www.telerik.com/kendo-react-ui/components/dateinputs/) enable the user to pick up dates for scheduling appointments.

```sh
yarn add @progress/kendo-react-dateinputs 
```

Edit `src/App.js`. 

Import:

```js
import { Calendar } from '@progress/kendo-react-dateinputs'
```

Redo the App div so it displays the calendar:

```js
<div className="App">
    <div className="App">
      <h1>Calendar</h1>
      <Calendar/>
    </div>      
</div>
```

If you wish, take a screenshot and save it here:

```sh
doc/screenshots/calendar.png
```

Commit:

```sh
git add -A 
git commit -m "Add calendar"
```

## Add KendoReact Animation

[The KendoReact Animation](https://www.telerik.com/kendo-react-ui/components/animation/) uses the TransitionGroup component to animate elements which appear, enter, or exit the viewport.

```sh
yarn add @progress/kendo-react-animation
```

Create file `src/Animation.js`

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Slide,
    Push,
    Expand,
    Fade,
    Zoom,
    Reveal
} from '@progress/kendo-react-animation';

import './styles.css';

const App = () => {

    const [show, setShow] = React.useState<boolean>(false);
    const [animationType, setAnimationType] = React.useState('slide');

    const handleSelect = (event) => {
        setAnimationType(event.target.value)
    }


    const children = show ? (
      <div
        className="content"
        >Content
      </div >) : null;

    let animation;

    switch (animationType) {
        case 'slide':
            animation = (<Slide >{children}</Slide>);
            break;
        case 'push':
            animation = (<Push >{children}</Push>);
            break;
        case 'expand':
            animation = (<Expand >{children}</Expand>);
            break;
        case 'fade':
            animation = (<Fade >{children}</Fade>);
            break;
        case 'zoom':
            animation = (<Zoom >{children}</Zoom>);
            break;
        case 'reveal':
            animation = (<Reveal >{children}</Reveal>);
            break;
        default: animation = (<Slide >{children}</Slide>); break;
    }

    return (
      <div className="example-wrapper row">
        <div className="col-xs-12 col-sm-6 example-col">
          {animation}
        </div>
        <div className="col-xs-12 col-sm-6 example-config">
          <input
            onClick={handleSelect}
            id="slide"
            className="k-radio k-radio-md"
            name="type"
            type="radio"
            value="slide"
            defaultChecked={true}
                />
          <label htmlFor="slide" className="k-radio-label">
                    &nbsp;Slide
          </label>
          <br />
          <input
            onClick={handleSelect}
            name="type"
            id="push"
            className="k-radio k-radio-md"
            type="radio"
            value="push"
                />
          <label htmlFor="push" className="k-radio-label">
                    &nbsp;Push
          </label>
          <br />
          <input
            onClick={handleSelect}
            name="type"
            id="expand"
            className="k-radio k-radio-md"
            type="radio"
            value="expand"
                />
          <label htmlFor="expand" className="k-radio-label">
                    &nbsp;Expand
          </label>
          <br />
          <input
            onClick={handleSelect}
            name="type"
            id="fade"
            className="k-radio k-radio-md"
            type="radio"
            value="fade"
                />
          <label htmlFor="fade" className="k-radio-label">
                    &nbsp;Fade
          </label>
          <br />
          <input
            onClick={handleSelect}
            name="type"
            id="zoom"
            className="k-radio k-radio-md"
            type="radio"
            value="zoom"
                />
          <label htmlFor="zoom" className="k-radio-label">
                    &nbsp;Zoom
          </label>
          <br />
          <input
            onClick={handleSelect}
            name="type"
            id="reveal"
            className="k-radio k-radio-md"
            type="radio"
            value="reveal"
                />
          <label htmlFor="reveal" className="k-radio-label">
                    &nbsp;Reveal
          </label>
          <br />
          <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" type="submit" onClick={() => setShow(!show)}>Animate</button>
        </div>
      </div>
    );
}

ReactDOM.render(
  <App />,
    document.querySelector('my-app')
);


## Add KendoReact Dropdowns, TreeView, Buttons, Animation

[The KendoReact Dropdowns](https://www.telerik.com/kendo-react-ui/components/dropdowns/) allow you to choose from a predefined list of options.

```sh
yarn add @progress/kendo-react-dropdowns 
yarn add @progress/kendo-react-treeview
yarn add @progress/kendo-react-buttons
yarn add @progress/kendo-react-animation
```

Edit `src/App.js`. 

Import:

```js
import {
  AutoComplete,
  ComboBox,
  MultiColumnComboBox,
  DropDownList,
  MultiSelect,
  DropDownTree,
} from "@progress/kendo-react-dropdowns";
```

Define some demo data such as:

```js
const App = () => {
  const demoColorNames = [
    "Red",
    "Green",
    "Blue",
  ];
}
```

Redo the App div so it displays the component:

```js
<div className="App">
    <h1>AutoComplete</h1>
    <AutoComplete
        data={demoColorNames}
        placeholder="This is the autocomplete placeholder"
    />
    </div>
</div>
```

If you wish, take a screenshot and save it here:

```sh
doc/screenshots/autocomplete.png
```

Commit:

```sh
git add -A 
git commit -m "Add calendar"
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
