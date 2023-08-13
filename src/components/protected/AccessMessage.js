import { Lock } from '@mui/icons-material';
import { Alert, AlertTitle, Button, Container } from '@mui/material';
import React from 'react';
import { useValue } from '../../context/ContextProvider';

const AccessMessage = () => {
  const { dispatch } = useValue();
  return (
    <Container sx={{ py: 5 }}>
      <Alert severity="error" variant="outlined">
        <AlertTitle>Forbidden Access ຫ້າມເຂົ້າເຖິງ</AlertTitle>
        Please login or register to access this page ກະລຸນາເຂົ້າສູ່ລະບົບ ຫຼືລົງທະບຽນເພື່ອເຂົ້າຫາໜ້ານີ້
        <Button
          variant="outlined"
          sx={{ ml: 2 }}
          startIcon={<Lock />}
          onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
        >
          login
        </Button>
      </Alert>
    </Container>
  );
};

export default AccessMessage;
