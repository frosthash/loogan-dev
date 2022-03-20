import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ProfilePicChanger from "./ProfilePicChanger";

const { Header, Sider, Content } = Layout;

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
    };
  }
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
            <div style={accountContainer}>
              <div style={profileImage}>
                <Avatar
                  size={64}
                  icon={<UserOutlined />}
                  onClick={<ProfilePicChanger />}
                />
                <div style={userName}>Cdera Ogidan</div>
              </div>

              <div>
                <h3>Basic Information</h3>
              </div>
              <div style={{ justifyContent: "center" }}>
                <h3>Additional Information</h3>
              </div>
              <div>
                <h3>Contact Information</h3>
              </div>
              <div>
                <h3>Job Information</h3>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const accountContainer = {
  paddingLeft: "600px",
  paddingTop: "auto",
};

const profileImage = {
  paddingTop: "-120px",
  justifyContent: "center",
};

const headerContainer = {
  fontFamily: "Sans Serif",
};

const userName = {
  fontSize: "30px",
};
export default Account;
