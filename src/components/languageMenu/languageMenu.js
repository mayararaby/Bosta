import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import withDispatch from '../../hoc/withDispatch';
import { setSelectedLocal } from '../../redux/actions';
import withLocalize from '../../hoc/withLocalize';

const LanguageMenu= ({ dispatch, t, i18n })=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState('ar');
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    dispatch(setSelectedLocal(language))
    i18n.changeLanguage(language)
    handleClose();
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {t(selectedLanguage)}
      </Button>
      <Menu
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handleLanguageChange('en')}>{t('en')}</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('ar')}>{t('ar')}</MenuItem>
      </Menu>
    </div>
  );
}
export default withDispatch (withLocalize(LanguageMenu))