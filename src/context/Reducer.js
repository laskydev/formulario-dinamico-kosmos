export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_FIELD':
      return [...state, action];
    case 'REMOVE_FIELD':
      return state.filter((item) => item.payload._uid !== action.payload);
    default:
      throw new Error();
  }
}
