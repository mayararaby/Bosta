import React, { useEffect, useState } from "react";
import { useTrackingService } from "../customHooks/useTrackingService";
import withDispatch from '../hoc/withDispatch';
import { SnackbarCustom } from "../components/snackbar/snackbar";

const HeaderSearch = (props) => {
  const { trackingNumber, dispatch, selectedLanguage, t } = props;
  const [open, setOpen] = useState(false);
  const { setTrackingNumberSearch, trackingResult } = useTrackingService({ initTrackingNumber: trackingNumber, dispatch });

  useEffect(() => {
    setOpen(!trackingResult);
  }, [trackingResult]);

  const handleSvgClick = () => {
    setTrackingNumberSearch(trackingNumber);
  };

  return (
    <>
      {!trackingResult && (
        <SnackbarCustom statue='error' message={t('wrongTrackNo')} open={open} setOpen={setOpen} />
      )}
      <svg
        onClick={handleSvgClick}
        className={`${selectedLanguage === 'ar' ? "iconSearchRight" : "iconSearchLeft"} iconSearch`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    </>
  );
};

export default withDispatch(HeaderSearch);