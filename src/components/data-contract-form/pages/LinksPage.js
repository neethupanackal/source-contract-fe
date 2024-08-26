import React from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';
import {
  TextField,
  Typography,
  Grid,
  Box,
  Button,
  IconButton,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const LinksPage = ({ handleBack, handleNext }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" align="center">
        Links
      </Typography>

      <FieldArray name="links">
        {({ push, remove, form }) => {
          const { values } = form;
          const { links } = values;

          return (
            <Box>
              {links && links.length > 0
                ? links.map((_, index) => (
                    <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          id={`links[${index}].name`}
                          name={`links[${index}].name`}
                          label="Link Name"
                        />
                        <ErrorMessage
                          name={`links[${index}].name`}
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          id={`links[${index}].url`}
                          name={`links[${index}].url`}
                          label="URL"
                        />
                        <ErrorMessage
                          name={`links[${index}].url`}
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <IconButton
                          onClick={() => remove(index)}
                          color="secondary"
                        >
                          <Remove />
                        </IconButton>
                      </Grid>
                    </Grid>
                  ))
                : null}

              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  push({
                    name: '',
                    url: '',
                  })
                }
                startIcon={<Add />}
                sx={{ mt: 2 }}
              >
                Add Link
              </Button>
            </Box>
          );
        }}
      </FieldArray>

    </Box>
  );
};

export default LinksPage;
