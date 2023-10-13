import React from 'react';
import { useTranslation } from 'react-i18next';

const withLocalize = (WrappedComponent) => {
  const WithLocalize = (props) => {
    const { t } = useTranslation();

    return <WrappedComponent {...props} t={t} />;
  };

  return WithLocalize;
};

export default withLocalize;