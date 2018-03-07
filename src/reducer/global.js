
const initState = {
  LoginState: false
};

export const global = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_LOGIN_STATE':
      return { ...state, LoginState: action.LoginState };
    default:
      return { ...state };
  }
};
