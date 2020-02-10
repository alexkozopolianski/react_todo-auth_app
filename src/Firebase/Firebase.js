import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
 "YOU CONFIG"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
