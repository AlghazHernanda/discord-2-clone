import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { Redirect } from "react-router-dom";
// import { useCollection } from "react-firebase-hooks/firestore";

const Home = () => {
    const [user] = useAuthState(auth);
    //const [channels] = useCollection(db.collection("channels"));
  
    // const handleAddChannel = () => {
    //   const channelName = prompt("Enter a new channel name");
  
    //   if (channelName) {
    //     db.collection("channels").add({
    //       channelName: channelName,
    //     });
    //   }
    // };

  return (
    <div>Home</div>
  )
}

export default Home