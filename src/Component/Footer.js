import React from "react";
import { logoLanguage } from "./logoSgv";

export default function Footer() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
      }}
      className=" bg-white w-full shadow py-4 "
    >
      <footer className="  flex container mx-auto justify-between items-center">
        <div className="space-x-4">
          © 2023 Airbnb, Inc. 
          <a>. Quyền riêng tư</a>
          <a>. Điều khoản</a>
          <a>. Sơ đồ trang web</a>
        </div>
        <div className="flex  space-x-4">
          <div className="flex items-center">{logoLanguage}</div>
          <a>Tiếng Việt (VN)</a>
          <a>$ USD</a>
          <a>Hổ trợ và tài nguyên</a>
        </div>
      </footer>
    </div>
  );
}
