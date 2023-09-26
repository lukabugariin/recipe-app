import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://login-zazjbx7nka-uc.a.run.app/",
      {
        email,
        password,
      }
    );

    dispatch(loginSuccess(response.data.appUser));

    localStorage.setItem("user", JSON.stringify(response.data.appUser));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
