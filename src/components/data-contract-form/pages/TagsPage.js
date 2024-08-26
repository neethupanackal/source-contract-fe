import React from 'react';
import { FieldArray, Field, ErrorMessage, useFormikContext } from 'formik';
import {
  TextField,
  Typography,
  Grid,
  Box,
  Button,
  Chip,
} from '@mui/material';
import { Add } from '@mui/icons-material';

const TagsPage = () => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" align="center">
        Tags
      </Typography>

      <FieldArray name="tags">
        {({ push, remove }) => (
          <Box>
            <Grid container spacing={2}>
              {values.tags && values.tags.length > 0 ? (
                values.tags.map((tag, index) => (
                  <Grid item key={index} xs={12} md={6}>
                    <Chip
                      label={tag}
                      onDelete={() => remove(index)}
                      color="primary"
                      sx={{ marginBottom: 1 }}
                    />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Typography>No tags added yet.</Typography>
                </Grid>
              )}
            </Grid>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Field
                  as={TextField}
                  fullWidth
                  id="newTag"
                  name="newTag"
                  label="New Tag"
                />
                <ErrorMessage
                  name="newTag"
                  component="div"
                  style={{ color: 'red' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    const tagValue = values.newTag;
                    if (tagValue && (!values.tags || !values.tags.includes(tagValue))) {
                      push(tagValue);
                      setFieldValue('newTag', '');
                    }
                  }}
                  startIcon={<Add />}
                >
                  Add Tag
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </FieldArray>
    </Box>
  );
};

export default TagsPage;