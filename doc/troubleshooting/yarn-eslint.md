# Yarn eslint

When we use create-react-app with Yarn, then we see errors during hot reloading that we believe are related to the linter. 

To fix the errors, we add a different linter for development:

```sh
yarn add eslint-config-react-app --dev
```

Commit:

```sh
git add -A
git commit -m "Add eslint-config-react-app"
```


