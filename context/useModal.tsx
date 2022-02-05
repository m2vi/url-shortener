import { createContext, useContext, useReducer } from 'react';

const ModalContext = createContext(null as any);

const initalState = {
  show: false,
  data: null,
};

export const modalReducer = (state: any, overwrite: any) => {
  return { ...state, ...overwrite };
};

export const ModalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(modalReducer, initalState);
  const value = { state, dispatch };
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    console.error('useModal must be used within a SearchProvider');
  }
  return context;
};
