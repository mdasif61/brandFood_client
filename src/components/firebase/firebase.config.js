// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,  
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,  
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,  
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,  
//   appId: import.meta.env.VITE_APPID,  
// }

// const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUswlogYPuinK5S6bPaamGqmQZ3xM3ueg",
  authDomain: "brand-food-b1948.firebaseapp.com",
  projectId: "brand-food-b1948",
  storageBucket: "brand-food-b1948.appspot.com",
  messagingSenderId: "449497702546",
  appId: "1:449497702546:web:dac09b6967d6197bed864b"
};
const app = initializeApp(firebaseConfig);
export default app;