export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";

export const getDataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload,
});

const url = `https://api.spacexdata.com/v3/capsules`;

export const getData = (dispatch) => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => dispatch(getDataSuccess(res)));
};
