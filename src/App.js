import './App.css';
import UploadPage from './pages/uploadPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UploadPreviewPage from './pages/uploadPreviewPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUploadImage } from './actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUploadImage());
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UploadPage} />
        <Route path="/uploads" component={UploadPreviewPage} />
      </Switch>
    </Router>
  );
}

export default App;
