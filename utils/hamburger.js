import { createContext, useReducer } from 'react';

export const Hamburger = createContext();
const initialState = {
  menuMode: false,
};

console.log('This is Hamburger', initialState.menuMode);

function reducer(state, action) {
  switch (action.type) {
    case 'MENU_MODE_ON':
      return { ...state, menuMode: true };
    case 'MENU_MODE_OFF':
      return { ...state, menuMode: false };

    default:
      return state;
  }
}

export function MenuProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <Hamburger.Provider value={value}>{props.children}</Hamburger.Provider>
  );
}
