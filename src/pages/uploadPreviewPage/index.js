import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import PreviewCard from '../../components/previewCard';

const UploadPreview = () => {
  const upload = useSelector((state) => state.upload);

  return <Layout>{upload.loading ? <Loader /> : <PreviewCard />}</Layout>;
};

export default UploadPreview;
