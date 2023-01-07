import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>Kaan</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            sapiente eligendi explicabo assumenda velit quisquam facilis sint,
            similique, nulla fugiat molestias provident recusandae architecto,
            illum impedit. Eos dolore similique nulla voluptate, at voluptates
            ex. Quae animi voluptatibus a quis quidem, labore magnam veniam
            molestias autem temporibus nisi, omnis porro sed excepturi?
            Consectetur velit assumenda quam dicta, expedita rerum voluptatibus
            eius sunt voluptatum hic eveniet, vitae non. Quos asperiores tempora
            laudantium possimus dolore officiis reiciendis? Velit, explicabo.
            Nostrum molestias impedit blanditiis!
          </p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
