import React from 'react';
import { useDispatch } from "react-redux";

const withDispatch = (WrappedComponent) => {
  const WithDispatch = (props) => {
    const dispatch = useDispatch();

    return <WrappedComponent {...props} dispatch={dispatch} />;
  };

  return WithDispatch;
};

export default withDispatch;