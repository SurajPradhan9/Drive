# Google Drive Clone

## Description
This project is a Google Drive Clone, a file storage application that allows users to securely upload, download, and retrieve files with proper authentication.

## Setup Project
1. Open terminal and initiate the project:
   - Run the command: `npm init -y` (This generates a `package.json` file).

2. Install necessary packages:
   - Run the command: `npm i express ejs` (This installs `express` and `ejs`).
   - The `node_modules` and `package-lock.json` files will be generated.

3. Create a new file `app.js` and set up a basic server.
   - Add the following code to `app.js`:
     ```javascript
     const express = require('express');
     const app = express();
     const port = 3000;

     app.get('/', (req, res) => {
       res.send('Server is running...');
     });

     app.listen(port, () => {
       console.log(`Server is running on http://localhost:${port}`);
     });
     ```
   - Run the server using: `npx nodemon app.js`.
   - Since this command is long, update `package.json` scripts:
     ```json
     "scripts": {
       "start": "npx nodemon app.js"
     }
     ```
    ### Server Setup Complete 🎉

## EJS Setup

Now that the server setup is done, we will set up EJS:

### Configure EJS as the View Engine

Add the following line to `app.js`:

```javascript
app.set('view engine', 'ejs');
```

### Create the Views Folder

1. Create a folder named `views`.
2. Inside it, create a file named `index.ejs`.

### Write HTML Code Inside `index.ejs`

```html
<h1>Hello World</h1>
```

### Modify the Express Route

Update the route in `app.js` to render the EJS file:

```javascript
app.get('/', (req, res) => {
  res.render('index');
});
```

### EJS Setup Complete 🎉

