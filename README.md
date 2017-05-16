# Starting place for react projects

Quickly configure a scalable React/Redux Project from the `create-react-app`
starting point.

Architectural ideas from
[React Boilerplate](https://github.com/mxstbr/react-boilerplate),
while easily leveraging the abstractions from
[React Scripts](https://github.com/facebookincubator/create-react-app)

You could clone this repo but the versions may fall behind.
Copying the conents of src/ to the src/ of a new project created with:
```
$ create-react-app new-app
```
would be the recommended approach.

Also copy over the generators/ dir to the new project

```
# Then install deps
yarn add immutable react-redux redux redux-immutable redux-saga reselect styled-components

# Install the dev dep, for the generators
yarn add -D plop

# Then make the scripts in the "script" key of the package.json look like:
  "scripts": {
    "start": "NODE_PATH=./src react-scripts start",
    "build": "NODE_PATH=./src react-scripts build",
    "test": "NODE_PATH=./src react-scripts test --env=jsdom",
    "eject": "NODE_PATH=./src react-scripts eject",
    "generate": "plop --plopfile generators/index.js"
  }
# This allows grabbing relative paths from src/ in a shorter way
# Ex: import Button from '../../components/Button'; becomes
# import Button from 'components/Button';
# this also adds the generate script
```
