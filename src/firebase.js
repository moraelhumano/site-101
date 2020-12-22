import { firebase } from '@firebase/app';

import "firebase/database";

let config = {
    apiKey: "AIzaSyDvZVsgR5qo8QUhohP9JA4Pc5vMMjP4aL0",
    authDomain: "app-inventario-c9779.firebaseapp.com",
    databaseURL: "https://app-inventario-c9779.firebaseio.com",
    projectId: "app-inventario-c9779",
    storageBucket: "app-inventario-c9779.appspot.com",
    messagingSenderId: "1022628663958",
    appId: "1:1022628663958:web:3ee00851890c50bef628b7",
    measurementId: "G-1115LQNY74"
};


firebase.initializeApp(config);

export default firebase.database();
