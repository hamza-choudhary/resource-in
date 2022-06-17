import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDN0uei-9VUZSLXKtIHPJYnXSFTt_MuzeQ",
  authDomain: "resource-inn.firebaseapp.com",
  projectId: "resource-inn",
  storageBucket: "resource-inn.appspot.com",
  messagingSenderId: "98293348347",
  appId: "1:98293348347:web:fb4774b9c4f7d67897bd5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

//Login by Microsoft
const microAuth = getAuth();
export const microsoftProvider = new OAuthProvider("microsoft.com");
export const signInWithMicrosoft = () => {
  signInWithPopup(microAuth, microsoftProvider)
    .then((results) => {
      const credential = OAuthProvider.credentialFromResult(results);
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;
      console.log(results);
    })
    .catch((error) => {
      console.log("error");
    });
};
