# Troubleshooting


## Error: Plugin "react" was conflicted

If you eventually hit an error like this:

```txt
Plugin "react" was conflicted between "package.json » eslint-config-react-app » …" and "BaseConfig » … node_modules/eslint-config-react-app/base.js"


Then you may be hitting a known problem with eslint-config-react-app version 7.

Try manually opening the file `package.json` then closing it, because developers says this seems to help fix a known path-related case-sensitive issue with Microsoft software such as Windows and VS Code:

```sh
code package.json
yarn start
```

Try downgrading:

```
yarn remove eslint-config-react-app
yarn add eslint-config-react-app@6
yarn start
```

Try reinstalling:

```
yarn remove eslint-config-react-app
yarn add eslint-config-react-app
yarn start
```

