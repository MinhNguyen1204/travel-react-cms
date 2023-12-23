import React, { DependencyList, useEffect, useRef } from 'react';

const useDidUpdate = (
  cb: () => void,
  deps: DependencyList,
) => {
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    cb();
  }, deps);
  return null
};

export default useDidUpdate;