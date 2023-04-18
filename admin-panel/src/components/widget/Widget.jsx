import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Wignet = ({ type }) => {

  return (
    <div className="widget">
      <div className="left">
        <span className="title">Users</span>
        <span className="counter">4566</span>
        <span className="link">See all user</span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpIcon />
          30%
        </div>
        <PersonOutlinedIcon className="icon" />
      </div>
    </div>
  );
};

export default Wignet;
