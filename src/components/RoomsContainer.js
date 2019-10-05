import React from "react";
import { withRoomConsumer } from "../context";


import FeaturedRooms from "../components/FeaturedRooms";

function RoomContainer({ context }) {
 
 
  return (
    <>
<FeaturedRooms />
<FeaturedRooms />    
    </>
  );
}

export default withRoomConsumer(RoomContainer);
