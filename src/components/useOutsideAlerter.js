import { useEffect } from 'react';

const useOutsideAlerter = (ref, handle) => {
  useEffect(() => {
    document.addEventListener('mousedown', handle);
    return () => {
      document.removeEventListener('mousedown', handle);
    };
  }, [ref]);
};

export default useOutsideAlerter;
