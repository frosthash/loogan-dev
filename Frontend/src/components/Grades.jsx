import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";

const { Header, Sider, Content, Footer } = Layout;

class Grades extends React.Component {
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
            <div>
              <text>Grades</text>
              <div>
                <table>
                  <tr>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          Made with ❤️ by Team Smart ©2022
        </Footer>
      </Layout>
    );
  }
}

export default Grades;
