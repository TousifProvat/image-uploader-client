import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import PreviewCard from '../../components/previewCard';

const UploadPreview = () => {
  const upload = useSelector((state) => state.upload);

  const image = upload.image;

  return (
    <Layout>
      {upload.loading ? <Loader /> : <PreviewCard imgSrc={image.imageLink} />}
    </Layout>
  );
};

export default UploadPreview;
