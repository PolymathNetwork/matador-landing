const INITIAL_STATE = {
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case true:
      return { ...state };
    default:
	  	return state;
  }
};