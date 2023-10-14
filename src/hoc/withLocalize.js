import React from 'react';
import { useTranslation } from 'react-i18next';
/**
 * HOC component to add t function in wrapped component props 
 * @param {Component} WrappedComponent 
 * @returns Component
 */
const withLocalize = (WrappedComponent) => {
  const WithLocalize = (props) => {
    const { t, i18n } = useTranslation();

    return <WrappedComponent {...props} t={t} i18n={i18n} />;
  };

  return WithLocalize;
};

export default withLocalize;