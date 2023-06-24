import React from "react";
import { logoLanguage } from "./logoSgv";

export default function Footer() {
  return (
    <div
      className=" bg-white w-full shadow py-4 "
    >
      <footer className="  flex container mx-auto justify-between items-start">
        <div className="flex flex-col tablet:flex-row">
          <p>© 2023 Airbnb, Inc. </p>
          <a>. Quyền riêng tư</a>
          <a>. Điều khoản</a>
          <a>. Sơ đồ trang web</a>
        </div>
        <div className="flex flex-col space-y-1 justify-start items-start laptop:flex-row laptop:space-y-0 laptop:space-x-4">
          <div className="space-x-2 flex items-center">
            <div className="inline-block">{logoLanguage}</div>
            <a>Tiếng Việt (VN)</a>
          </div>
          <a>$ USD</a>
          <a>Hổ trợ và tài nguyên</a>
        </div>
      </footer>
    </div>
  );
}
