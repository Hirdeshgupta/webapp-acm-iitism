import * as firebase from "firebase";

  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyD9UuH4O9_9xY-a6_FEXKRpxxn71TyMdCs",
    authDomain: "acm-app-f9b62.firebaseapp.com",
    databaseURL: "https://acm-app-f9b62.firebaseio.com",
    projectId: "acm-app-f9b62",
    storageBucket: "acm-app-f9b62.appspot.com",
    messagingSenderId: "119955370506",  
  };

//   appId: "1:119955370506:web:61dcd721507366f819a5f3",
//     measurementId: "G-NC4HP4VXYW"


// import * as firebase from "firebase";

// const config = {...};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();