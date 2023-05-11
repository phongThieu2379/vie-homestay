
import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;
const RoomItem = ({ room,id }) => {
  const { tenPhong, giaTien, moTa, hinhAnh } = room;
  return (
    <NavLink to={`/detail/${id}`} className="mx-3 my-6">
      <Card
        hoverable
        style={{
          width: 260,
        }}
        cover={
          <img
            style={{
              
              height: 160,
              objectFit: "cover",
            }}
            alt="example"
            src={hinhAnh}
          />
        }
      >
        <Meta
          style={{
            width: "auto",
            height: 200,
          }}
          title={tenPhong}
          description={
            <div>
              <div
                style={{
                  height: 136,
                  width: "auto",
                  overflow: "hidden",
                }}
                className="font-light"
              >
                {moTa}
              </div>
              <div>
                <b>{giaTien} $</b>/đêm
              </div>
            </div>
          }
        />
      </Card>
    </NavLink>
  );
};

export default RoomItem;

