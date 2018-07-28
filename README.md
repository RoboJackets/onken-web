# onken frontend

Onken is a tool for managing finances for student organizations. This project constitutes the forward facing UI of the application.

## NextJS

This project uses the [NextJS](https://nextjs.org/) framework, built on ReactJS and Node. This allows server side rendering, proxying, and url path customization from the frontend without any backend dependencies.

Nothing needs to be set up on your machine to run the application, and experience in Node is not necessary.

#### Redux
Management of global state is handled by [Redux](https://redux.js.org/) middleware. This keeps global object logic separate from the props and state managed by ReactJS.

## Styling
Global style variables and component stylesheets are managed by a combination of the [LESS CSS preprocessor](http://lesscss.org/) + [CSS Modules](https://github.com/css-modules/css-modules) and [styled-jsx](https://github.com/zeit/styled-jsx).
LESS CSS is used by a majority of the application, while styled-jsx is included for inline style adjustments.

#### Ant Design
The [Ant Design](https://ant.design/) library is used for shared resources like tables, buttons, icons, and other UI elements.
It provides a combination of React Components and styling to make inserting UI elements quick and easy.

## Getting started
This project uses NPM (node package manager) to manage dependencies. To install these dependencies, `cd` to your local [clone](https://services.github.com/on-demand/github-cli/clone-repo-cli) of this repository and run either `npm install` or `yarn`. This should generate a `node_modules` folder in the project directory.

```
git clone git@github.com:Holben888/Onken-Frontend.git
cd Onken-Frontend
yarn
```

#### Running in dev mode
To start the project in developer mode, run `npm run dev` from the project directory.
This builds and runs the project on the default port (`localhost:3000`).
The app will also rebuild whenever project file changes are saved.

#### Running in production mode
If you want to build and run the project manually, run the following commands:

```
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

## That's it. Happy hacking!
