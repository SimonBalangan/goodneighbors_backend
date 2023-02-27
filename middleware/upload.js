const multer = require("multer");
const FirebaseStorage = require("multer-firebase-storage");
const { v4: uuidv4 } = require("uuid");

const firebaseUploader = multer({
  storage: FirebaseStorage({
    bucketName: process.env.STORAGE_BUCKET_FIREBASE,
    credentials: {
      clientEmail: process.env.CLIENT_EMAIL_FIREBASE,
     
      privateKey: process.env.PRIVATE_KEY_FIREBASE.replace(/\\n/g, "\n"),
      projectId: process.env.PROJECT_ID_FIREBASE,
    },
    public: true,
    nameSuffix: `-${uuidv4()}`,
    
    rules: [
      {
        object: "*",
        methods: {
          read: true,
          
          write: true,
        },
      },
    ],
  }),
});

module.exports = firebaseUploader;