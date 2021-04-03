import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();

export const signup = (firstName, lastName, email, password) =>
    auth.createUserWithEmailAndPassword(email, password).then(() => {
        const user = auth.currentUser;
        user.updateProfile({
            displayName: `${firstName} ${lastName}`,
        });
    });

export const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

export const logout = () => auth.signOut();

export const submitOrder = (data) => {
    const myuid = auth.currentUser.uid;
    const orderData = {
        id: myuid,
        ...data,
    };
    const newOrderKey = database.ref().child('orders').push().key;
    const updates = {};
    updates[`/orders/${newOrderKey}`] = orderData;

    return database.ref().update(updates);
};
