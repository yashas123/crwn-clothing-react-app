import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDzHtHWQqAE4rboVATvpLCYA8stYllou2M",
  authDomain: "crwn-db-34d2c.firebaseapp.com",
  databaseURL: "https://crwn-db-34d2c.firebaseio.com",
  projectId: "crwn-db-34d2c",
  storageBucket: "crwn-db-34d2c.appspot.com",
  messagingSenderId: "20807340304",
  appId: "1:20807340304:web:58f9af883d1c385a8cd595",
  measurementId: "G-GTJ8SZK5WD"
};

export const createUserProfileDocument = async (userAuth, addData) => {
  if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists){
		const {displayName, email} = userAuth;
		const createdAt = new Date();

		try{
			await userRef.set({
				displayName,
				email,
				createdAt,
				...addData
			})
		} catch(error){
			console.log('Error creating user', error.message);
		}

	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
