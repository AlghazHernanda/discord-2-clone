import React from 'react'
import { HashtagIcon, SearchIcon } from "@heroicons/react/outline";
import {
    BellIcon,
    ChatIcon,
    UsersIcon,
    InboxIcon,
    QuestionMarkCircleIcon,
    PlusCircleIcon,
    GiftIcon,
    EmojiHappyIcon,
  } from "@heroicons/react/solid";
  import { useSelector } from "react-redux";
  import { selectChannelId, selectChannelName } from "../features/channelSlice";
  import { auth, db } from "../firebase";
//import {  useRef } from "react";
  import { useAuthState } from "react-firebase-hooks/auth";
//import { useCollection } from "react-firebase-hooks/firestore";

function Chat() {

  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [user] = useAuthState(auth);
//   const inputRef = useRef("");
//   const chatRef = useRef(null);

  return (
    <div className="flex flex-col h-screen">
        <header className="flex items-center justify-between space-x-5 border-b border-gray-800 p-4 -mt-1">
            <div className="flex items-center space-x-1">
            <HashtagIcon className="h-6 text-[#72767d]" />
            <h4 className="text-white font-semibold">{channelName}</h4>
            </div>
            <div className="flex space-x-3">
            <BellIcon className="icon" />
            <ChatIcon className="icon" />
            <UsersIcon className="icon" />
            <div className="flex bg-[#202225] text-xs p-1 rounded-md">
                <input
                type="text"
                placeholder="Search"
                className="bg-[#202225] focus:outline-none text-white pl-1 placeholder-[#72767d]"
                />
                <SearchIcon className="h-4 text-[#72767d] mr-1" />
            </div>
            <InboxIcon className="icon" />
            <QuestionMarkCircleIcon className="icon" />
            </div>
        </header>
      </div>
  )
}

export default Chat