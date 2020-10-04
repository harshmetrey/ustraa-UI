import axios from 'axios'

export const getCategory = () => dispatch => {
    return axios
    .get(`https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob`)
    .then((res) => res.data)
    .catch((err) => {
      dispatch({
        type: "GET_ERRORS",
        paylaod: err,
      });
    });
} 