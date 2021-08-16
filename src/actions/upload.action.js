import { uploadConstants } from './constants';
import axios from 'axios';

const api = 'https://image-uploader-tap.herokuapp.com/api/v1/images/upload';

// const api = 'http://localhost:5000/api/v1/images/upload';

export const uploadImage = (form) => {
  return async (dispatch) => {
    dispatch({ type: uploadConstants.UPLOAD_IMAGE_REQUEST });

    const res = await axios.post(api, form);

    if (res.status === 201 || res.status === 200) {
      localStorage.setItem('image', JSON.stringify(res.data));
      setTimeout(
        () =>
          dispatch({
            type: uploadConstants.UPLOAD_IMAGE_SUCCESS,
            payload: { image: res.data },
          }),
        1500
      );
    } else {
      dispatch({
        type: uploadConstants.UPLOAD_IMAGE_FAILURE,
        payload: { error: res.error },
      });
    }
  };
};

export const updateUploadImage = () => {
  return async (dispatch) => {
    let image = localStorage.getItem('image')
      ? JSON.parse(localStorage.getItem('image'))
      : null;

    if (image) {
      dispatch({
        type: uploadConstants.UPLOAD_IMAGE_SUCCESS,
        payload: { image: image },
      });
    }
  };
};
