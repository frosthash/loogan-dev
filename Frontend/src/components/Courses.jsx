import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";

const { Header, Sider, Content } = Layout;

class Courses extends React.Component {
  render() {
    return (
      <Layout>
        <Sider>
          <Sidebar />
        </Sider>
        <Layout>
          <Header />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          ></Content>
        </Layout>
      </Layout>
    );
  }
}

export default Courses;
