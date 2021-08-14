import { uploadConstants } from '../actions/constants';

const initialState = {
  error: null,
  loading: false,
  pictureLink: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case uploadConstants.UPLOAD_IMAGE_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case uploadConstants.UPLOAD_IMAGE_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        pictureLink: action.payload.piclink,
      });
    default:
      return state;
  }
};
