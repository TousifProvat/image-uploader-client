import { useDispatch } from 'react-redux';
import { uploadImage } from '../../actions/upload.action';
import { useHistory } from 'react-router-dom';
// layout
import Layout from '../../components/Layout';

// css
import './style.css';

// svg
import { ReactComponent as PlaceHolder } from '../../assets/Placeholder.svg';

import UploadForm from './uploadFrom';
import { useEffect, useState } from 'react';

function UploadPage(props) {
  const [sharedImage, setSharedImage] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (sharedImage !== '') {
      dispatch(uploadImage(sharedImage));
      history.push('/uploads');
    }
  }, [sharedImage]);

  return (
    <Layout>
      <UploadForm
        placeholderImg={<PlaceHolder />}
        setSharedImage={setSharedImage}
      />
    </Layout>
  );
}

export default UploadPage;
