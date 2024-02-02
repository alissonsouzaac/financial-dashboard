import React from 'react';
import Alert from '@mui/material/Alert';

interface AlertComponentProps {
  text: string;
}

const AlertComponent: React.FC<AlertComponentProps> = ({ text}) => {
  return (
    <div data-testid="alert-container">
      <Alert variant="filled" severity={'error'} style={{ marginTop: '20px' }}>
        {text}
     </Alert>
    </div>
  );
};

export default AlertComponent;
