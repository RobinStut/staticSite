const firebaseConfig = {
    apiKey: `${process.env.apiKey}`,
    authDomain: `${process.env.id}.firebaseapp.com`,
    databaseURL: `https://${process.env.id}.firebaseio.com`,
    projectId: `${process.env.id}`,
    storageBucket: `${process.env.id}.appspot.com`,
    messagingSenderId: `${process.env.messagingSenderId}`,
    appId: `${process.env.appId}`
};
// Initialize Firebase with a "default" Firebase project
var defaultProject = firebase.initializeApp(firebaseConfig);

// Option 1: Access Firebase services via the defaultProject variable
var defaultDatabase = defaultProject.database();
var auth = defaultProject.auth();

console.log(defaultDatabase);