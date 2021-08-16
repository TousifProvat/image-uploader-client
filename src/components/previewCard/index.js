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
        <img src={props.imgSrc} />
      </div>
      <div className="previewLink">
        <input ref={inputRef} readOnly value={props.imgSrc} />
        <button onClick={copyCodeToClipboard}> Copy link</button>
      </div>
    </div>
  );
};

export default PreviewCard;
