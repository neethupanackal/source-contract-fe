import React from 'react';
import { Field, ErrorMessage } from 'formik';
import {
  TextField,
  Typography,
  Grid,
  Box,
  Button,
} from '@mui/material';

const TermsPage = ({ handleBack, handleNext }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" align="center">
        Terms
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            as={TextField}
            fullWidth
            id="terms.usage"
            name="terms.usage"
            label="Usage"
            multiline
            rows={2}
            helperText={<ErrorMessage name="terms.usage" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            as={TextField}
            fullWidth
            id="terms.limitations"
            name="terms.limitations"
            label="Limitations"
            multiline
            rows={2}
            helperText={<ErrorMessage name="terms.limitations" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            as={TextField}
            fullWidth
            id="terms.billing"
            name="terms.billing"
            label="Billing"
            multiline
            rows={2}
            helperText={<ErrorMessage name="terms.billing" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            as={TextField}
            fullWidth
            id="terms.noticePeriod"
            name="terms.noticePeriod"
            label="Notice Period"
            helperText={<ErrorMessage name="terms.noticePeriod" />}
          />
        </Grid>
      </Grid>

    </Box>
  );
};

export default TermsPage;
