import React from "react";
import { Layout, Row } from "antd";
import Sidebar from "./Sidebar";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ProfilePicChanger from "./ProfilePicChanger";
import Table from "react-bootstrap/Table";
const { Header, Sider, Content } = Layout;

const fullName = "Johnn Doe";
const emailAddress = "johndoe@gmail.com";

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
                <div style={userName}>John Doe</div>
              </div>

              <div>
                <h3 style={{ fontWeight: "bold" }}>Basic Information</h3>
                <div>
                  <table>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Full Name</td>
                      <td style={{ paddingLeft: "200px" }}>{fullName}</td>
                    </tr>
                    <tr style={{ paddingTop: "10px" }}>
                      <td style={{ fontWeight: "bold" }}>Email Address </td>
                      <td style={{ paddingLeft: "200px" }}>{emailAddress}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Student Id</td>
                      <td style={{ paddingLeft: "200px", alignItems: "right" }}>
                        <a href="#">Add Student ID</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Password</td>
                      <td style={{ paddingLeft: "200px" }}>
                        <a href="#">Change Password</a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div style={addtionalInformation}>
                <h3 style={{ fontWeight: "bold" }}>Additional Information</h3>
                <div>
                  <table>
                    <tr>
                      <td>Other Name/Nickname</td>
                      <td style={{ paddingLeft: "150px" }}>
                        <a href="#">Add other name/Nickname</a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div style={addtionalInformation}>
                <h3 style={{ fontWeight: "bold" }}>Contact Information</h3>
                <div>
                  <table>
                    <tr>
                      <td>Mailing Address</td>
                      <td style={{ paddingLeft: "200px" }}>
                        <a href="#">Add mailing address</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Phone Number</td>
                      <td style={{ paddingLeft: "200px" }}>
                        <a href="#">Add phone number</a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div style={addtionalInformation}>
                <h3 style={{ fontWeight: "bold" }}>Job Information</h3>
                <div>
                  <table>
                    <tr>
                      <td>Company</td>
                      <td style={{ paddingLeft: "200px" }}>
                        <a>Add company</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Job Title</td>
                      <td style={{ paddingLeft: "200px" }}>
                        <a href="#">Add job title</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Job Information</td>
                      <td style={{ paddingLeft: "200px" }}>
                        <a href="#">Add departmente</a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const accountContainer = {};

const addtionalInformation = {
  paddingTop: "50px",
};

const profileImage = {
  marginLeft: "37vw",
};

const headerContainer = {
  fontFamily: "Sans Serif",
};

const userName = {
  fontSize: "30px",
};
export default Account;
