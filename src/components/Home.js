import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { Redirect } from "react-router-dom";
// import { useCollection } from "react-firebase-hooks/firestore";
import ServerIcon from './ServerIcon';

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
    <>
      {!user && <Redirect to="/" />}
      <div className="flex h-screen">
        <div className="flex flex-col space-y-3 bg-[#202225] p-3 min-w-max">
          <div className="server-default hover:bg-discord_purple">
            <img src="https://rb.gy/kuaslg" alt="" className="h-5" />
          </div>
          <hr className=" border-gray-700 border w-8 mx-auto" />
          <ServerIcon image="https://rb.gy/qidcpp" />
          <ServerIcon image="https://rb.gy/zxo0lz" />
          <ServerIcon image="https://rb.gy/qidcpp" />
          <ServerIcon image="https://rb.gy/zxo0lz" />
         
        </div>
      </div>
    </>
  )
}

export default Home