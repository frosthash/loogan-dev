import React from "react";
import { Layout, Card, Meta } from "antd";
import Sidebar from "./Sidebar";

const { Header, Sider, Content, Footer } = Layout;

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
          >
            <div>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1>Courses</h1>
              </div>

              <div
                style={{
                  textAlign: "center",
                }}
              >
                <p>Current Courses</p>
              </div>

              <div>
                <Card
                  hoverable
                  style={{
                    height: 240,
                    width: 999,
                  }}
                  cover={
                    <img
                      style={{
                        height: 120,
                        width: 999,
                      }}
                      alt="example"
                    />
                  }
                >
                  <Card.Meta
                    title="CS-330"
                    description="Network Security and Architectural Design"
                  />
                </Card>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <Card
                  hoverable
                  style={{
                    height: 240,
                    width: 999,
                  }}
                  cover={
                    <img
                      style={{
                        height: 120,
                        width: 999,
                      }}
                      alt="example"
                    />
                  }
                >
                  <Card.Meta
                    title="CS-350"
                    description="Information Security"
                  />
                </Card>
              </div>

              <div style={{ paddingTop: "30px" }}>
                <Card
                  hoverable
                  style={{
                    height: 240,
                    width: 999,
                  }}
                  cover={
                    <img
                      style={{
                        height: 120,
                        width: 999,
                      }}
                      alt="example"
                    />
                  }
                >
                  <Card.Meta
                    title="CS-350"
                    description="Information Security"
                  />
                </Card>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <Card
                  hoverable
                  style={{
                    height: 200,
                    width: 999,
                  }}
                  cover={
                    <img
                      style={{
                        height: 120,
                        width: 999,
                      }}
                      alt="example"
                    />
                  }
                >
                  <Card.Meta
                    title="CS-350"
                    description="Information Security"
                  />
                </Card>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <Card
                  hoverable
                  style={{
                    height: 240,
                    width: 999,
                  }}
                  cover={
                    <img
                      style={{
                        height: 120,
                        width: 999,
                      }}
                      alt="example"
                    />
                  }
                >
                  <Card.Meta
                    title="CS-350"
                    description="Information Security"
                  />
                </Card>
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Made with ❤️ by Team Smart ©2022
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Courses;
