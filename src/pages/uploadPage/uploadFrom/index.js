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

  // const onSubmit = () => {
  //   props.onSubmit && props.onSubmit();
  // };

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    noClick: true,
    // onDrop: onDrop,
    accept: 'image/jpeg, image/png, image/gif',
    onDropAccepted: onDrop,
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) =>
    errors.map((e, index) => (
      <li
        style={{
          color: `red`,
          listStyle: 'none',
          textAlign: 'center',
        }}
        key={index}
      >
        {e.message}
      </li>
    ))
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
