import { useRef } from 'react';

/**
 * 用于判断组件是否第一次挂载
 */
export const useFirstMountState = () => {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;

    return true;
  }

  return isFirst.current;
}