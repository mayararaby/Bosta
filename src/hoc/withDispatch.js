import React from 'react';
import { useDispatch } from "react-redux";

/**
 * HOC to add dispatch function to wrapped component 
 * @param {Component} WrappedComponent 
 * @returns Component
 */
const withDispatch = (WrappedComponent) => {
  const WithDispatch = (props) => {
    const dispatch = useDispatch();

    return <WrappedComponent {...props} dispatch={dispatch} />;
  };

  return WithDispatch;
};

export default withDispatch;