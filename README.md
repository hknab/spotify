## How I worked on this project
My goal was to simulate a professional work envionment.
- I built this app based on Figma Design: [project on figma](https://www.figma.com/community/file/1063378861946596719)
- I worked with tasks on Kanban Board.

## How to navigate this project
- Somewhat complex stateful logic: [Example code](https://github.com/abdalicodes/spotify/blob/main/src/context/PlayerContext.js)
- responsive CSS using Grid: [Example code](https://github.com/abdalicodes/spotify/blob/main/src/layout/main/index.js)
- The application fetches data from tho local json-server: [Example for request api and hooks](https://github.com/abdalicodes/spotify/blob/main/src/hooks/playlist.js)
- Use Material-Ui (MUI) to build user interface

## Why I build this project anywhay
- I didn't use a state management library like Redux on purpose. For this app simple UseContext and useState is sufficient. I realized that more and more projects don't use Redux anymore since GraphQL or React-Query are often used for data management.
- Material-ui is a great library for styling. It includes SX prop as a shortcut for defining custom style. Use Scoped classes, and allows a seamless integration with JS.
- My plan is to become a full-stack developer eventually. But for the beginning I focus on the frontend. That's why I decided to use JSON-SERVER rather to create a custom server. I have Basic background knowledge as well.

## If I had more time I would change this 
- Refactor some of the components, especially header components.
- Add a special backend with Express.js & Mongodb 

## [Watch the YouTube video](https://www.youtube.com/watch?v=qF3OSSuB3Nk)
## To run the app, be sure to install [spotify-json-server](https://github.com/abdalicodes/spotify-json-server/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


