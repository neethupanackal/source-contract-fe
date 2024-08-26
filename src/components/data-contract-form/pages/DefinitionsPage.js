import React from 'react';
import { Field, FieldArray, ErrorMessage, useFormikContext } from 'formik';
import {
  TextField,
  Typography,
  Grid,
  Box,
  Button,
  IconButton,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const DefinitionsPage = () => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" align="center">
        Definitions
      </Typography>

      <FieldArray name="definitions">
        {({ push, remove }) => (
          <>
            {values.definitions.map((definition, index) => (
              <Box key={index} sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: 4 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      name={`definitions[${index}].term`}
                      label="Term"
                      helperText={<ErrorMessage name={`definitions[${index}].term`} />}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      name={`definitions[${index}].definition`}
                      label="Definition"
                      helperText={<ErrorMessage name={`definitions[${index}].definition`} />}
                    />
                  </Grid>
                </Grid>
                <IconButton
                  aria-label="remove definition"
                  onClick={() => remove(index)}
                  color="error"
                  sx={{ mt: 2 }}
                >
                  <Remove />
                </IconButton>
              </Box>
            ))}

            <Button
              variant="outlined"
              startIcon={<Add />}
              onClick={() => push({ term: '', definition: '' })}
            >
              Add Definition
            </Button>
          </>
        )}
      </FieldArray>

    </Box>
  );
};

export default DefinitionsPage;
