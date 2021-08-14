import { uploadConstants } from './constants';

export const uploadImage = (form) => {
  return async (dispatch) => {
    dispatch({ type: uploadConstants.UPLOAD_IMAGE_REQUEST });
    setTimeout(
      () =>
        dispatch({
          type: uploadConstants.UPLOAD_IMAGE_SUCCESS,
          payload: { piclink: form.name },
        }),
      3000
    );
  };
};
