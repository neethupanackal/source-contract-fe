import React from 'react';
import { Field, FieldArray, ErrorMessage, useFormikContext } from 'formik';
import {
  TextField,
  Typography,
  Grid,
  Box,
  Button,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const ModelsPage = () => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" align="center">
        Models
      </Typography>

      <FieldArray name="models">
        {({ push, remove }) => (
          <>
            {values.models && values.models.length > 0 ? (
              values.models.map((model, index) => (
                <Box key={index} sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: 4 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        name={`models[${index}].name`}
                        label="Model Name"
                        helperText={<ErrorMessage name={`models[${index}].name`} />}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <InputLabel id={`models[${index}].type-label`}>Model Type</InputLabel>
                        <Field
                          as={Select}
                          id={`models[${index}].type`}
                          name={`models[${index}].type`}
                          label="Model Type"
                        >
                          <MenuItem value="table">Table</MenuItem>
                          <MenuItem value="view">View</MenuItem>
                          <MenuItem value="file">File</MenuItem>
                          <MenuItem value="stream">Stream</MenuItem>
                        </Field>
                      </FormControl>
                    </Grid>
                    {/* Additional fields specific to model type can be added here */}
                  </Grid>
                  <IconButton
                    aria-label="remove model"
                    onClick={() => remove(index)}
                    color="error"
                    sx={{ mt: 2 }}
                  >
                    <Remove />
                  </IconButton>
                </Box>
              ))
            ) : (
              <Typography>No models added yet.</Typography>
            )}

            <Button
              variant="outlined"
              startIcon={<Add />}
              onClick={() =>
                push({ name: '', type: 'table' /* Add other initial model fields here */ })
              }
            >
              Add Model
            </Button>
          </>
        )}
      </FieldArray>
    </Box>
  );
};

export default ModelsPage;