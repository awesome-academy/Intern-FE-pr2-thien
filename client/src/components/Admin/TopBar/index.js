import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faUser,
  faCogs,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  // Button,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  // Button,
} from "reactstrap";

import imgProfile1 from "assets/img/undraw_profile_1.svg";
import imgProfile from "assets/img/undraw_profile.svg";

const TopBar = () => {
  return (
    <Navbar className="navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <NavbarToggler
        id="sidebarToggleTop"
        className="btn-link d-md-none rounded-circle mr-3"
      />

      <Nav className="ml-auto" navbar>
        {/* <!-- Nav Item - Alerts --> */}
        <UncontrolledDropdown className="no-arrow mx-1" nav inNavbar>
          <DropdownToggle nav caret>
            <FontAwesomeIcon
              id="alertsDropdown"
              className="fa-lg"
              icon={faBell}
            />
            {/* <span className="badge badge-danger badge-counter">3+</span> */}
            <Badge color="danger" className="badge-counter">
              3+
            </Badge>
          </DropdownToggle>
          <DropdownMenu
            className="dropdown-list dropdown-menu-right shadow animated--grow-in"
            right
          >
            <DropdownItem header>Alerts Center</DropdownItem>
            <DropdownItem className="d-flex align-items-center">
              <div className="mr-3">
                <div className="icon-circle bg-primary">
                  <i className="fas fa-file-alt text-white" />
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 12, 2019</div>
                <span className="font-weight-bold">
                  A new monthly report is ready to download!
                </span>
              </div>
            </DropdownItem>
            <DropdownItem className="text-center small text-gray-500">
              Show All Alerts
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        {/* <!-- Nav Item - Messages --> */}
        <UncontrolledDropdown className="no-arrow mx-1" nav inNavbar>
          <DropdownToggle nav caret>
            <FontAwesomeIcon
              id="alertsDropdown"
              className="fa-lg"
              icon={faEnvelope}
            />
            {/* <span className="badge badge-danger badge-counter">3+</span> */}
            <Badge color="danger" className="badge-counter">
              7
            </Badge>
          </DropdownToggle>
          <DropdownMenu
            className="dropdown-list dropdown-menu-right shadow animated--grow-in"
            right
          >
            <DropdownItem header>Message Center</DropdownItem>
            <DropdownItem className="d-flex align-items-center">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src={imgProfile1} alt="" />
                <div className="status-indicator bg-success" />
              </div>
              <div>
                <div className="small text-gray-500">December 12, 2019</div>
                <span className="font-weight-bold">
                  A new monthly report is ready to download!
                </span>
              </div>
            </DropdownItem>
            <DropdownItem className="text-center small text-gray-500">
              Show All Alerts
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        {/* <!-- Nav Item - User Information --> */}
        <UncontrolledDropdown className="no-arrow mx-1" nav inNavbar>
          <DropdownToggle nav caret>
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Thiện
            </span>
            <img
              className="img-profile rounded-circle"
              src={imgProfile}
              alt=""
            />
          </DropdownToggle>
          <DropdownMenu
            className="dropdown-menu-right shadow animated--grow-in"
            right
          >
            <DropdownItem>
              <FontAwesomeIcon
                className="fa-sm fa-fw mr-2 text-gray-400"
                icon={faUser}
              />
              Thông tin
            </DropdownItem>

            <DropdownItem>
              <FontAwesomeIcon
                className="fa-sm fa-fw mr-2 text-gray-400"
                icon={faCogs}
              />
              Cài đặt
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <FontAwesomeIcon
                className="fa-sm fa-fw mr-2 text-gray-400"
                icon={faSignOutAlt}
              />
              Đăng xuất
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};

export default TopBar;
