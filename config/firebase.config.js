const Firebase=require('firebase-admin')
const serviceAccount=require('../drive-7faed-firebase-adminsdk-fbsvc-8e1579f4ed.json')

const firebase=Firebase.initializeApp({
    credential:Firebase.credential.cert(serviceAccount),
    // storageBucket://Upgrade project issue in firebase
})

module.exports=Firebase