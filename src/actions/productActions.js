import axios from 'axios'

export const getProducts = (categoryId) => dispatch => {
    return axios
    .get(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${categoryId}`)
    .then((res) => res.data)
    .catch((err) => {
      dispatch({
        type: "GET_ERRORS",
        paylaod: err,
      });
    });
} 