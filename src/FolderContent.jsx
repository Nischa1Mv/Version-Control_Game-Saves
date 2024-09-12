import React, { useState, useEffect } from "react";
import axios from "axios"; // Optional, or you can use fetch()

const FolderContent = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Fetch folder contents from the backend
    axios
      .get("http://localhost:5000/api/folder-contents")
      .then((response) => {
        setFiles(response.data); // Set the folder contents into state
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the folder contents!",
          error
        );
      });
  }, []);

  return (
    <div>
      <h2>Folder Contents</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
};

export default FolderContent;
