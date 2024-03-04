import React from "react";
import styled from "styled-components";
import rigtmenu from "../assets/rightmenu.png";
import Bearish from "../assets/bearish.png";
import drive from "../assets/drive.png";
import dropbox from "../assets/dropbox.png";
import box from "../assets/box.png";
import plugIcon from "../assets/plug.png";
import penIcon from "../assets/pen.png";
import settingIcon from "../assets/setting.svg";
import folder from "../assets/folder.svg";
import category from "../assets/category.svg";
import list from "../assets/list.svg";
import doc from "../assets/doc.svg";
import doc1 from "../assets/doc1.svg";
import doc2 from "../assets/doc2.svg";
import doc3 from "../assets/doc3.svg";
import image from "../assets/image.svg";
import video from "../assets/video.svg";
import docoutline from "../assets/docoutline.svg";
import Card from "../component/Card";
import Folder from "../component/Folder";
import FilesTable from "../component/FilesTable";
const HomePage = () => {
  return (
    <Wrapper>
      <div className="left_Sidebar">
        <div className="top">
          <div className="logo_name">
            <img src={Bearish} alt="logo" />
            <div className="company_name">company name</div>
          </div>
          <div className="polygon"></div>
        </div>
        <div className="create_new">
          <button>
            <img src={penIcon} alt="" height={15} width={15} />
            Create New
          </button>
          <div className="plug_icon">
            <img src={plugIcon} alt="" height={15} width={15} />
          </div>
        </div>
        <div className="cloud_storage">
          <div className="title">Cloud Storage</div>
          <ul>
            <li>
              <div className="icons_name">
                <img src={Bearish} alt="" />
                Bearish OS
              </div>
              <div className="action">
                <img src={settingIcon} alt="" />
              </div>
            </li>
            <li>
              <div className="icons_name">
                <img src={drive} alt="" />
                Google Drive
              </div>
              <div className="action">
                <img src={settingIcon} alt="" />
              </div>
            </li>
            <li>
              <div className="icons_name">
                <img src={dropbox} alt="" />
                DropBox
              </div>
              <div className="action">
                <img src={settingIcon} alt="" />
              </div>
            </li>
          </ul>
          <button>
            <span></span>View More
          </button>
        </div>
        <div className="shared">
          <div className="title">Shared</div>
        </div>
      </div>
      <div className="main">
        <div className="top">
          <div className="left">
            <div className="hamburger"></div>
            <div className="title">Cloudstorage</div>
          </div>
          <div className="right">
            <div className="logo">TU</div>
          </div>
        </div>
        <div className="clouds">
          <div className="title">My Cloud Storage</div>
          <div className="cloud_details">
            <div className="cloud_cards">
              <Card title={"Google Drive"} logo={drive} progress={"drive"} />
              <Card title={"Dropbox"} logo={dropbox} progress={"dropbox"} />
              <Card title={"Box"} logo={box} progress={"box"} />
            </div>
            <div className="next_button">
              <span></span>
            </div>
          </div>
        </div>
        <div className="folders">
          <div className="folder_header">
            <div className="left">
              <div className="name_logo">
                <img src={folder} alt="folder" />
                <span className="title">Folders</span>
              </div>
            </div>
            <div className="right">
              <div className="category active">
                <img src={category} alt="category" />
              </div>
              <div className="list">
                <img src={list} alt="" />
              </div>
              <button>Show all folders</button>
            </div>
          </div>
          <div className="folder_details">
            <div className="folder_cards">
              <Folder />
              <Folder />
              <Folder />
            </div>
            <div className="next_button">
              <span></span>
            </div>
          </div>
        </div>
        <div className="files">
          <div className="files_header">
            <div className="left">
              <div className="title">
                <img src={docoutline} alt="document" />
                Files
              </div>
              <div className="icons">
                <img src={doc} alt="document" />
                <img src={doc1} alt="document" />
                <img src={doc2} alt="document" />
                <img src={doc3} alt="document" />
                <img src={image} alt="document" />
                <img src={video} alt="document" />
              </div>
            </div>
            <div className="right">
              <div className="category active">
                <img src={category} alt="category" />
              </div>
              <div className="list">
                <img src={list} alt="" />
              </div>
              <button>Show all files</button>
            </div>
          </div>
          <div className="files_table">
            <FilesTable/>
          </div>
        </div>
      </div>
      <div className="right_sidebar">
        <div className="top">
          <div className="left">
            <span className="title">Cloud Analytics</span>
            <span className="sub_title">5 Active analytics link</span>
          </div>
          <div className="right">
            <img src={rigtmenu} alt="" />
          </div>
        </div>
        <div className="links"></div>
        <div className="upload"></div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #f2f5f8;
  display: grid;
  grid-template-columns: 275px 1fr 275px;
  .polygon {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 6px solid #00767b;
    border-bottom: 5px solid transparent;
  }
  .left_Sidebar {
    background: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-right: 1px solid #e9edf2;
    .top {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      .logo_name {
        display: flex;
        align-items: center;
        gap: 10px;
        text-transform: capitalize;
        font-size: 15px;
        font: normal normal normal 15px/21px Source Serif Pro;
      }
    }
    .create_new {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 15px;

      button {
        display: flex;
        align-items: center;
        background: #a53a01;
        box-shadow: 0px 6px 6px #00767b29;
        border: 1px solid #e9edf2;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
        gap: 5px;
        font: normal normal 300 15px/21px Source Serif Pro;
      }
    }
    .cloud_storage {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .title {
        font: normal normal 600 15px/21px Source Serif Pro;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .icons_name {
            display: flex;
            gap: 5px;
            align-items: center;
            font: normal normal 300 13px/17px Source Serif Pro;
          }
          img {
            height: 21px;
            width: 21px;
          }
        }
      }
      button {
        background: transparent;
        border: none;
        outline: none;
        width: max-content;
        display: flex;
        gap: 5px;
        align-items: center;
        font: normal normal normal 11px/15px Source Serif Pro;
        span {
          width: 0;
          height: 0;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-top: 7px solid #00767b;
        }
      }
    }
    .shared {
      .title {
        font: normal normal 600 15px/21px Source Serif Pro;
      }
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      padding: 5px 10px;
      border-bottom: 1px solid #e9edf2;
      .title {
        font: normal normal 600 15px/21px Source Serif Pro;
      }
      .right {
        width: max-content;
        padding-left: 25px;
        border-left: 2px solid #e9edf2;
        .logo {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 3px 6px #00000029, 0px 3px 6px #00000029;
        }
      }
    }
    .clouds {
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      .title {
        font: normal normal 600 15px/21px Source Serif Pro;
      }
      .cloud_details {
        display: grid;
        grid-template-columns: 1fr 50px;
        gap: 50px;
        .cloud_cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .next_button {
          background-color: black;
          width: 30px;
          height: 100%;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            width: 0;
            height: 0;
            border-top: 7px solid transparent;
            border-left: 7px solid #fff;
            border-bottom: 7px solid transparent;
          }
        }
      }
    }
    .folders {
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 10px;
      .folder_header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          .name_logo {
            display: flex;
            align-items: center;
            gap: 5px;

            .title {
              font: normal normal 600 18px/25px Source Serif Pro;
            }
          }
        }
        .right {
          display: flex;
          align-items: center;
          gap: 15px;
          button {
            width: max-content;
            border: none;
            outline: none;
            background-color: transparent;
            text-decoration: underline;
            color: #000aff;
            font: normal normal normal 13px/17px Source Serif Pro;
            cursor: pointer;
          }
          .active {
            border-bottom: 2px solid #a53a01;
          }
        }
      }
      .folder_details {
        display: grid;
        grid-template-columns: 1fr 50px;
        gap: 50px;
        .folder_cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .next_button {
          background-color: black;
          width: 30px;
          height: 100%;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            width: 0;
            height: 0;
            border-top: 7px solid transparent;
            border-left: 7px solid #fff;
            border-bottom: 7px solid transparent;
          }
        }
      }
    }
    .files {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 0 10px;
      margin-top: 10px;
      .files_header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          display: flex;
          align-items: center;
          gap: 50px;
          .title {
            display: flex;
            align-items: center;
            gap: 5px;
            font: normal normal 600 18px/25px Source Serif Pro;
          }
          .icons{
            display: flex;
            align-items: center;
            gap: 5px;
          }
        }
        .right {
          display: flex;
          align-items: center;
          gap: 15px;
          button {
            width: max-content;
            border: none;
            outline: none;
            background-color: transparent;
            text-decoration: underline;
            color: #000aff;
            font: normal normal normal 13px/17px Source Serif Pro;
            cursor: pointer;
          }
          .active {
            border-bottom: 2px solid #a53a01;
          }
        }
      }
    }
  }
  .right_sidebar {
    background-color: #fff;
    border-left: 1px solid #e9edf2;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .title {
          font: normal normal 600 15px/21px Source Serif Pro;
        }
        .sub_title {
          font: normal normal 200 11px/15px Source Serif Pro;
        }
      }
    }
  }
`;
export default HomePage;
