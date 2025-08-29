import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

// Reducer para estado global
const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DARK_MODE':
      return { ...state, darkMode: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.some(item => item.id === action.payload.id)
          ? state.favorites.filter(item => item.id !== action.payload.id)
          : [...state.favorites, action.payload]
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    darkMode: false,
    language: 'es',
    cart: [],
    favorites: [],
    user: null,
    notifications: []
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);