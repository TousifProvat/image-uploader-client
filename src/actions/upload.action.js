import { uploadConstants } from './constants';
import axios from 'axios';

const api = 'https://image-uploader-tap.herokuapp.com/api/v1/images/upload';

export const uploadImage = (form) => {
  return async (dispatch) => {
    dispatch({ type: uploadConstants.UPLOAD_IMAGE_REQUEST });

    const res = await axios.post(api, form);

    if (res.status === 201 || res.status === 200) {
      setTimeout(
        () =>
          dispatch({
            type: uploadConstants.UPLOAD_IMAGE_SUCCESS,
            payload: { image: res.data },
          }),
        3000
      );
    } else {
      dispatch({
        type: uploadConstants.UPLOAD_IMAGE_FAILURE,
        payload: { error: res.error },
      });
    }
  };
};
