# Google Drive Clone

## Description
This project is a Google Drive Clone, a file storage application that allows users to securely upload, download, and retrieve files with proper authentication.

## Steps Followed to Create This Project
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
