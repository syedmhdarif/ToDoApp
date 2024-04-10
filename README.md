This is a To-Do Application that helps you to make a list of your daily tasks.

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.


# ToDoApp
An application to add a new task to be perform. This application use React Native as a frontend framework, Express js and node js for the backend RESTful API, and MySql for the database.

## Table of Contents

- [Installation](#installation)
- [API and Its CRUD](#API)
- [Design](#design)

## Installation

### Database/server
1. cd To-Do-app && cd backend
2. npm install && npm start

### Frontend - ToDoApp 
You may also clone the application from this repository or get it from here: https://github.com/syedmhdarif/ToDoApp
1. npm install , cd ios and pod install the application
2. npx react-native run-ios (for ios) || npx react-native run-android (for android)
3. Test the application

## API 
Show also the implementation of CRUD
1. Full API : http://localhost:3306/to-do/v1/items
2. router.get("/items", getItem);
3. router.get("/items/:id", getItemByIds);
4. router.get("/items/:title", getItemByTitles);
5. router.post("/items", createItems);
6. router.put("/items/:id", updateItemByIds);
7. router.delete("/items/:id", deleteItems);

## Design

<div style="display: flex; flex-direction: row;">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/To-do-app/backend/assets/screenshot1.png" alt="Home page" width="300" height="700">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/To-do-app/backend/assets/screenshot2.png" alt="Add New Task" width="300" height="700">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/To-do-app/backend/assets/screenshot3.png" alt="Edit/delete/update existing task" width="300" height="700">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/To-do-app/backend/assets/screenshot4.png" alt="Edit/delete/update existing task" width="300" height="700">
</div>

