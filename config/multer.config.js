const multer = require("multer");
const firebaseStorage = require("multer-firebase-storage");
const firebase = require("./firebase.config");
const serviceAccount = require("../drive-7faed-firebase-adminsdk-fbsvc-8e1579f4ed.json");

const storage = firebaseStorage({
  credentials: firebase.credential.cert(serviceAccount),
  // bucketName://Upgrade project issue in firebase,
  unique: true,
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
