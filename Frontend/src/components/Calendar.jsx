import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { Calendar } from "antd";

const { Header, Sider, Content, Footer } = Layout;
const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};
class CalendarPage extends React.Component {
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
          >
            <Calendar onPanelChange={onPanelChange} />;
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Made with ❤️ by Team Smart ©2022
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default CalendarPage;
