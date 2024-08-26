import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import {
  TextField,
  Typography,
  Grid,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const InfoPage = ({ handleBack, handleNext }) => {
  const { values } = useFormikContext();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" align="center">
        Info
      </Typography>

      <Grid container spacing={2}>
        {/* Title */}
        <Grid item xs={12} md={6}>
          <Field
            as={TextField}
            fullWidth
            id="info.title"
            name="info.title"
            label="Title"
            helperText="Required"
            error={Boolean(<ErrorMessage name="info.title" component="div" style={{ color: 'red' }} />)}
          />
        </Grid>

        {/* Version */}
        <Grid item xs={12} md={6}>
          <Field
            as={TextField}
            fullWidth
            id="info.version"
            name="info.version"
            label="Version"
            helperText="Required"
            error={Boolean(<ErrorMessage name="info.version" component="div" style={{ color: 'red' }} />)}
          />
        </Grid>

        {/* Status */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="info.status-label">Status</InputLabel>
            <Field
              as={Select}
              id="info.status"
              name="info.status"
              label="Status"
            >
              <MenuItem value="proposed">Proposed</MenuItem>
              <MenuItem value="in development">In Development</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="deprecated">Deprecated</MenuItem>
              <MenuItem value="retired">Retired</MenuItem>
            </Field>
            <ErrorMessage name="info.status" component="div" style={{ color: 'red' }} />
          </FormControl>
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <Field
            as={TextField}
            fullWidth
            id="info.description"
            name="info.description"
            label="Description"
            multiline
            rows={2}
          />
        </Grid>

        {/* Owner */}
        <Grid item xs={12} md={6}>
          <Field
            as={TextField}
            fullWidth
            id="info.owner"
            name="info.owner"
            label="Owner"
          />
        </Grid>

        {/* Contact Name */}
        <Grid item xs={12} md={6}>
          <Field
            as={TextField}
            fullWidth
            id="info.contact.name"
            name="info.contact.name"
            label="Contact Name"
          />
        </Grid>

        {/* Contact URL */}
        <Grid item xs={12} md={6}>
          <Field
            as={TextField}
            fullWidth
            id="info.contact.url"
            name="info.contact.url"
            label="Contact URL"
            helperText="Must be a valid URL"
            error={Boolean(<ErrorMessage name="info.contact.url" component="div" style={{ color: 'red' }} />)}
          />
        </Grid>

        {/* Contact Email */}
        <Grid item xs={12} md={6}>
          <Field
            as={TextField}
            fullWidth
            id="info.contact.email"
            name="info.contact.email"
            label="Contact Email"
            helperText="Must be a valid email"
            error={Boolean(<ErrorMessage name="info.contact.email" component="div" style={{ color: 'red' }} />)}
          />
        </Grid>
      </Grid>

    </Box>
  );
};

export default InfoPage;
