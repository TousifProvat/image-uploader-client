import './style.css';

const Loader = () => {
  return (
    <div className="loaderContainer">
      <p className="loaderText">Uploading....</p>
      <div className="loaderBar">
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Loader;
