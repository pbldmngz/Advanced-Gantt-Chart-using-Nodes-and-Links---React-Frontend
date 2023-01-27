import { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import { FileList } from "./FileList";
import { Box } from "@mui/material";

import "../assets/css/Upload.css";
import axios from "axios";

const fileTypes = ["CSV"];

export const Upload = () => {
  const [files, setFiles] = useState([]);

  const handleUpload = () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    console.log("sending this form data: ", formData);
    axios.post("http://localhost:5000/upload", formData);
    setFiles([]);
  };

  const handleAdd = (file) => {
    const newFiles = [...files, file[0]];
    setFiles(newFiles);
  };

  const handleRemove = (index) => {
    const newFiles = files.filter((file, i) => i !== index);
    console.log(index);
    setFiles(newFiles);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box className="d-flex flex-column justify-content-center well align-self-center">
        <FileUploader
          name="file"
          types={fileTypes}
          multiple={true}
          handleChange={handleAdd}
        />
        {<FileList files={files} handleRemove={handleRemove} />}
        <hr />
        <button
          disabled={files.length !== 2}
          className="btn btn-outline-primary mt-3"
          type="button"
          onClick={handleUpload}
        >
          Upload
        </button>
      </Box>
    </div>
  );
};
