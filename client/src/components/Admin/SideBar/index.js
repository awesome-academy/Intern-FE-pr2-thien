import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaughWink,
  faTachometerAlt,
  faCog,
  faUser,
  faPizzaSlice,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <FontAwesomeIcon className="fa-2x" icon={faLaughWink} />
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <Link className="nav-link" to="/admin/main/thongKe">
          <FontAwesomeIcon className="fa-fw mr-2" icon={faTachometerAlt} />
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Quản lý</div>

      <li className="nav-item">
        <Link className="nav-link" to="/admin/main/qlCuaHang">
          <FontAwesomeIcon className="mr-2" icon={faCog} />
          <span>Quản lý hóa đơn</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/admin/personManager">
          <FontAwesomeIcon className="mr-2" icon={faUser} />
          <span>Quản lý người dùng</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/admin/main/qlMonAn">
          <FontAwesomeIcon className="mr-2" icon={faPizzaSlice} />
          <span>Món ăn</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/admin/main/qlLoaiMonAn">
          <FontAwesomeIcon className="mr-2" icon={faUtensils} />
          <span>Loại món ăn</span>
        </Link>
      </li>
    </ul>
  );
};

export default SideBar;
