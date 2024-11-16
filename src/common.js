import firebase from 'firebase/compat/app'; // Import firebase from the modular SDK
import 'firebase/compat/auth'; // Import auth module


class CommonFunction {
    
    async isCheckUser() {
        return new Promise((resolve, reject) => {
          const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              resolve(true);
            } else {
              resolve(false);
            }
            unsubscribe(); // Unsubscribe to avoid memory leaks
          });
        });
      }
      
}

export default CommonFunction;