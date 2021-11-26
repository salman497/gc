// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const environment = {
  matGaId: '', // No development id for Material
  ngGaId: 'UA-8594346-26', // Development id
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBBJPUWtR-JKu-BST9aFI-adxbnvLGPtIk",
    authDomain: "goals-3cd94.firebaseapp.com",
    projectId: "goals-3cd94",
    storageBucket: "goals-3cd94.appspot.com",
    messagingSenderId: "352872631390",
    appId: "1:352872631390:web:46ba9250337d40f8e0f8cf",
    measurementId: "G-31TG8TFZE9"
  }
  
};



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


initializeApp(environment.firebaseConfig);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
