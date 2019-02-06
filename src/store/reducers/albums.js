import {
  FETCH_USER_ALBUMS_REQUEST,
  FETCH_USER_ALBUMS_SUCCESS,
  FETCH_USER_ALBUMS_FAILURE,
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  SET_PHOTO,
  UNSET_PHOTO
} from "../actions/actionTypes";

const initialState = {
  albums: [],
  photos: [],
  currentPhoto: null,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_ALBUMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USER_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.albums,
        loading: false
      };
    case FETCH_USER_ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Something went wrong, please try again later."
      };
    case FETCH_PHOTOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.photos,
        loading: false
      };
    case FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Something went wrong, please try again later."
      };
    case SET_PHOTO:
      return {
        ...state,
        currentPhoto: state.photos.find(photo => {
          return photo.id === action.photoId;
        })
      };
    case UNSET_PHOTO:
      return {
        ...state,
        currentPhoto: null
      };
    default:
      return state;
  }
};

export default reducer;
