import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  InboxOutlined,
  DashboardOutlined,
  UserOutlined,
  BookOutlined,
  HistoryOutlined,
  QuestionCircleOutlined,
  CalendarTwoTone,
  TeamOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";

const { Sider } = Layout;

function Sidebar() {
  const { currentUser } = useUserAuth();
  const username = currentUser.displayName;

  return (
    <Sider
      breakpoint="lg"
      style={{ height: "100vh" }}
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        className="logo"
        style={{ fontSize: 20, color: "white", background: "#011828" }}
      >
        <p>Lọọgan</p>
      </div>

      <Menu theme="dark" mode="inline">
        <Menu.Item key="2" icon={<DashboardOutlined />}>
          <Link to="/institution">Institution Page</Link>
        </Menu.Item>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/account">{username}</Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<BookOutlined />}>
          <Link to="/courses">Courses</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<TeamOutlined />}>
          <Link to="/collaborate">Collaborate</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<CalendarTwoTone />}>
          <Link to="/calendar">Calendar</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<InboxOutlined />}>
          <Link to="/inbox">Inbox</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<HistoryOutlined />}>
          <Link to="/history">VR World</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<QuestionCircleOutlined />}>
          <Link to="/grades">Grades</Link>
        </Menu.Item>
        <Menu.Item key="9" icon={<SettingOutlined />}>
          <Link to="/help">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
