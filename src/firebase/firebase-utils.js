// import firebase from 'firebase/app'
// import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword  ,GoogleAuthProvider,signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import {  getDoc ,doc,getFirestore,setDoc } from "firebase/firestore";


// import 'firebase/firestore'

 const firebaseConfig = {
    apiKey: "AIzaSyCzYLBwDkIiqvHoVzs3VE68daxSlG4dDKo",
  authDomain: "ecomerce-6877e.firebaseapp.com",
  projectId: "ecomerce-6877e",
  storageBucket: "ecomerce-6877e.appspot.com",
  messagingSenderId: "754200004950",
  appId: "1:754200004950:web:58f58971ce2ad21e9daef7",
  measurementId: "G-K5YPVYTYVB"
  };

//   start serveses
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app);


//   const provider = new firebase.auth.GoogleAuthProvider();
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });


  /**
   * !!! exports function 
   */

    export const singInWithGoogle = async (  )=>{

      const user = null ;

      signInWithPopup(auth, provider)
     .then(({user}) => {
      console.log("singed in with google",user);
   
       user =  createProfile(user) ;

     })
     .catch((error) => {
      console.log("error on sing in with google");
     });
    
     return user ;

  }

  export const createProfile = async (user,otherdata)=>{

    if (!user) return ;

    const userRef = doc(db,"users",user.uid);
     
    const querySnapshot = await getDoc(userRef); 
    
      if(!querySnapshot.exists()){

          const {email,uid,photoURL} = user ;
         const name = user.displayName ? user.displayName :otherdata.name  ;
         
         const userData = {
          name,
          email,
          uid,
          image:photoURL
        }
        
        try{

        await setDoc(userRef,userData)
        console.log("user create sucsesfully");
        return userData ;
      }catch(e){
        console.log("there is an error on create a user",e);
      }
 
      };

 
      return querySnapshot.data() ;
    
  }


export {auth} ;



export const SingUpWithEmailPassword = async ({email,password,name})=>{
  
  var userRet = null ;

  createUserWithEmailAndPassword(auth, email, password)
  .then(({user}) => {

    //  user = userCredential.user;
    userRet = createProfile(user,{name})
     console.log("نخاول اساء ال aaaaaaaaaaaa",user);
     
     
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.log(" error on sing in with email pass ",);
 
  });

return userRet;
}

export const  loginWithEmailAndPassword = async (email,password)=>{

  try {
    await signInWithEmailAndPassword(auth,email,password)
  } catch (error) {
    console.log("error on sing i with email password ",error.message);
  }

}
