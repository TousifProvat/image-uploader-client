import React, { useState } from 'react';
// layout
import Layout from '../../components/Layout';

// css
import './style.css';

// svg
import { ReactComponent as PlaceHolder } from '../../assets/Placeholder.svg';

function UploadPage(props) {
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
    e.preventDefault();
  };

  return (
    <Layout>
      <form className="imageUploaderForm">
        <div className="form-title">Upload your Image</div>
        <div className="upload-type">File should be Jpeg, Png...</div>
        <div
          className="drop-zone"
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          style={{ borderStyle: `${dragged ? 'solid' : 'dotted'}` }}
        >
          <div className="placeholder">
            <PlaceHolder style={{ padding: '1rem 0' }} />
            <span style={{ color: '#a9a9a9' }}>Drap & Drop your image her</span>
          </div>
          <input type="file" name="myFile" className="drop-zone-input" />
        </div>
        <span style={{ color: '#a9a9a9' }}>or</span>
        <div className="fileUploadOption">
          <label htmlFor="uploadBtn">Choose a file</label>
          <input type="file" id="uploadBtn" />
        </div>
      </form>
    </Layout>
  );
}

export default UploadPage;
