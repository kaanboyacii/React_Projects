import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />;
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input style={{display:"none"}} type="file" id="file" />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" value="art" id="art" />
          <label htmlFor="art">Art</label>
          <input type="radio" name="cat" value="science" id="science" />
          <label htmlFor="art">Science</label>
          <input type="radio" name="cat" value="technology" id="technology" />
          <label htmlFor="art">Technology</label>
          <input type="radio" name="cat" value="cinema" id="cinema" />
          <label htmlFor="art">Cinema</label>
          <input type="radio" name="cat" value="design" id="design" />
          <label htmlFor="art">Design</label>
          <input type="radio" name="cat" value="food" id="food" />
          <label htmlFor="art">Food</label>
        </div>
      </div>
    </div>
  );
};

export default Write;
