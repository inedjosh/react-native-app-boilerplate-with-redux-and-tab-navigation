export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = () => {
    return async (dispatch) => {
      dispatch({ type: LOGIN });
    };
  };

  export const logout = () => {
      return async (dispatch) => {
          dispatch({type: LOGOUT})
      }
  }