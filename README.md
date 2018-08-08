# onken frontend

Onken is a tool for managing finances for student organizations. This project constitutes the forward facing UI of the application.

## Technologies
This is a project adhering to modern web standards (as of the application's inception) using HTML5, CSS3, and ES6 JavaScript.

### NextJS

This project uses the [NextJS](https://nextjs.org/) framework, built on ReactJS and Node. This allows server side rendering, proxying, and url path customization from the frontend without any backend dependencies.

### Redux
Management of global state is handled by [Redux](https://redux.js.org/) middleware. This keeps global object logic separate from the props and state managed by ReactJS.

### Styling
Global style variables and component stylesheets are managed by [Styled Components](https://www.styled-components.com/). This is a CSS-in-JS solution with globals managed using the React Context API.

LESS CSS is used for importing and customizing the Ant Design stylesheet.

### Ant Design
The [Ant Design](https://ant.design/) library is used for shared resources like tables, buttons, icons, and other UI elements.
It provides a combination of React Components and styling to make inserting UI elements quick and easy.

### ESLint
[ESLint](https://eslint.org/) Is a JavaScript linter that checks to make sure code adheres to our styling guidelines.

**All Pull Requests must pass ESLint checks before they can be merged.**

## Getting started

**Make sure you have the latest version of [Node](https://github.com/Microsoft/vscode-recipes/tree/master/Next-js) installed on your machine before running this application.**

This project uses NPM (node package manager) to manage dependencies. To install dependencies for this project, `cd` to your local [clone](https://services.github.com/on-demand/github-cli/clone-repo-cli) of this repository and run either `npm install` or `yarn`. This should generate a `node_modules` folder in your project directory.

```bash
git clone git@github.com:Holben888/Onken-Frontend.git
cd Onken-Frontend
yarn
```

To make sure your code satisfies ESLint style checking, we recommend installing the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in your text editor.

#### Running in dev mode
To start the project in developer mode, run `npm run dev` from the project directory.
This builds and runs the project on the default port (`localhost:3000`).
The app will also rebuild whenever project file changes are saved.

#### Running in production mode
If you want to build and run the project manually, run the following commands:

```bash
npm run build
npm run start
```

These will deploy the project at `localhost:3000` without rebuild detection.
Default port configuration, proxying, and other server / runtime management can be done from within `server.js`.

#### Debugging
Since NextJS uses both a ReactJS process and a Node process to run, debugging requires setup for both processes.
If you're using [VS Code](https://code.visualstudio.com/), copy the following into the `launch.json` file found in the `.vscode` directory:

```
{
  "version": "0.2.0",
  "configurations": [
    {
      // Allows clientside debugging; listens at localhost:3000 in Google Chrome
      "type": "chrome",
      "request": "launch",
      "name": "Next: Chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    },
    {
      // Allows serverside debugging; maps "next" to the "node" process
      "type": "node",
      "request": "launch",
      "name": "Next: Node",
      "runtimeExecutable": "node",
      "runtimeArgs": [
        // The --inspect flag allows breakpoints to be used
        "--inspect",
        "node_modules/next/dist/bin/next"
      ],
    }
  ],
  "compounds": [
    {
      // A compound command to run both server and clientside debugging simultaneously
      "name": "Next: Full",
      "configurations": [
        "Next: Node",
        "Next: Chrome"
      ]
    }
  ]
}
```

This launch configuration should be portable to other text editors / environments.
[This Article](https://github.com/Microsoft/vscode-recipes/tree/master/Next-js) is another great resource on debugging NextJS apps.

## That's it. Happy hacking! :tada: