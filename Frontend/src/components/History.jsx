import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";

const { Header, Sider, Content, Footer } = Layout;

class History extends React.Component {
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
          <Footer style={{ textAlign: "center" }}>
            Made with ❤️ in Nigeria ©2022
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default History;
