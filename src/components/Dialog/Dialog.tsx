import * as React from 'react';

import { usePortal } from '../../hooks';
import Paper from '../Paper';

const Dialog = () => {
  const { openPortal, closePortal, isOpen, Portal } = usePortal();

  return (
    <Portal>
      <Paper>ahah</Paper>
    </Portal>
  );
};

export { Dialog };
