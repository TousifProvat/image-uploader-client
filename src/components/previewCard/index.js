import { useRef } from 'react';
import { ReactComponent as Tick } from '../../assets/tick.svg';

// css
import './style.css';

const PreviewCard = (props) => {
  const inputRef = useRef(null);

  const copyCodeToClipboard = (e) => {
    inputRef.current.select();
    document.execCommand('copy');
  };

  return (
    <div className="previewCardContainer">
      <div className="successContainer">
        <div className="successLoader">
          <Tick fill="white" />
        </div>
        <p className="successText">Uploaded Successfully!</p>
      </div>
      <div className="contentPreview">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
      </div>
      <div className="previewLink">
        <input
          ref={inputRef}
          readOnly
          value="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        />
        <button onClick={copyCodeToClipboard}> Copy link</button>
      </div>
    </div>
  );
};

export default PreviewCard;
