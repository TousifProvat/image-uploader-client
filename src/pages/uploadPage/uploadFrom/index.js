import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

// css
import './style.css';

function UploadForm(props) {
  const [dragged, setDragged] = useState(false);

  const onDragOver = (e) => {
    e.preventDefault();
    setDragged(true);
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    setDragged(false);
  };

  const onDrop = (e) => {
    props.setSharedImage(e[0]);
  };

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    noClick: true,
    accept: 'image/jpeg, image/png, image/gif',
    onDropAccepted: onDrop,
    maxSize: 10000000,
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) =>
    errors.map((err, index) => {
      if (err.code === 'file-invalid-type') {
        return (
          <li
            key={index}
            style={{
              color: `red`,
              listStyle: 'none',
              textAlign: 'center',
            }}
          >
            File type must be jpeg, png, gif.
          </li>
        );
      } else if (err.code === 'file-too-large') {
        return (
          <li
            key={index}
            style={{
              color: `red`,
              listStyle: 'none',
              textAlign: 'center',
            }}
          >
            File bigger than 10mb
          </li>
        );
      }
    })
  );

  return (
    <form className="imageUploaderForm">
      {fileRejections.length > 0 && fileRejectionItems}
      <div className="form-title">Upload your Image</div>
      <div className="upload-type">File should be Jpeg, Png, Gif</div>
      <div
        {...getRootProps()}
        className="drop-zone"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        style={{ borderStyle: `${dragged ? 'solid' : 'dotted'}` }}
      >
        <input
          {...getInputProps()}
          type="file"
          name="myFile"
          className="drop-zone-input"
        />
        <div className="placeholder">
          {props.placeholderImg && props.placeholderImg}
          <span style={{ color: '#a9a9a9' }}>Drap & Drop your image her</span>
        </div>
      </div>
      <span style={{ color: '#a9a9a9' }}>or</span>
      <div className="fileUploadOption">
        <label htmlFor="uploadBtn">Choose a file</label>
        <input
          type="file"
          onChange={(e) => onDrop([e.target.files[0]])}
          id="uploadBtn"
          {...getInputProps()}
        />
      </div>
    </form>
  );
}

export default UploadForm;
