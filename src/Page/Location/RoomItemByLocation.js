import React from 'react'
import RoomItemByLocationDesktop from './RoomItemByLocationDesktop';
import RoomItemByLocationMobile from './RoomItemByLocationMobile';
import RoomItemByLocationTablet from './RoomItemByLocationTablet';
import { Desktop, Mobile, Tablet } from '../../Layout/Reponsive';
export default function RoomItemByLocation({ room }) {
  return (
    <div>
      <Tablet>
        <RoomItemByLocationTablet room={room} />
      </Tablet>
      <Desktop>
        <RoomItemByLocationDesktop room={room} />
      </Desktop>
      <Mobile>
        <RoomItemByLocationMobile room={room} />
      </Mobile>
    </div>
  )
}
