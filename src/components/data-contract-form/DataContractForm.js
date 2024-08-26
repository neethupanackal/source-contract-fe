import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import ServersPage from './pages/ServersPage';
import InfoPage from './pages/InfoPage';
import ModelsPage from './pages/ModelsPage';
import TermsPage from './pages/TermsPage';
import TagsPage from './pages/TagsPage';
import DefinitionsPage from './pages/DefinitionsPage';
import SchemaPage from './pages/SchemaPage';
import QualityPage from './pages/QualityPage';
import ExamplesPage from './pages/ExamplesPage';
import ServiceLevelsPage from './pages/ServiceLevelsPage';
import LinksPage from './pages/LinksPage';
import DataContractSchema from './validations/DataContractSchema';
import {
    Button,
    Typography,
    Box,
} from '@mui/material';


const DataContractForm = () => {
    const [page, setPage] = useState(0);
    const [selectedServerType, setSelectedServerType] = useState('BigQueryServer');

    const pages = [
        <InfoPage />,
        <ServersPage
            selectedServerType={selectedServerType}
            setSelectedServerType={setSelectedServerType}
        />,
        <TermsPage />,
        <ModelsPage />,
        <DefinitionsPage />,
        <SchemaPage />,
        <ExamplesPage />,
        <ServiceLevelsPage />,
        <QualityPage />,
        <LinksPage />,
        <TagsPage />
    ];

    const isLastPage = page === pages.length - 1;

    const handleNext = () => {
        setPage((prev) => prev + 1);
    };

    const handlePrevious = () => {
        setPage((prev) => prev - 1);
    };

    const handleSubmit = (values, { setSubmitting }) => {
        console.log('Form submitted with values:', values);
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{
                dataContractSpecification: '0.9.3',
                id: '',
                info: {
                    title: '',
                    version: '',
                    status: 'proposed',
                    description: '',
                    owner: '',
                    contact: {
                        name: '',
                        url: '',
                        email: '',
                    },
                },
                servers: {
                    description: '',
                    environment: '',
                },
                models: [],
                definitions: [],
                tags: [],
                newTag: '',
                //... other initial values
            }}
            validationSchema={DataContractSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, handleSubmit }) => (
                <Form>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            padding: 2,
                            width: '100%',
                            margin: '0 auto',
                            border: '1px solid #ccc',
                            borderRadius: 4,
                        }}
                    >
                        <Typography variant="h4" align="center">
                            Data Contract Specification Form
                        </Typography>

                        {pages[page]}

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                            {page > 0 && (
                                <Button onClick={handlePrevious} variant="contained">
                                    Previous
                                </Button>
                            )}
                            <Button variant="contained" onClick={isLastPage ? handleSubmit : handleNext} disabled={isSubmitting}>
                                {isLastPage ? 'Submit' : 'Next'}
                            </Button>
                        </Box>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default DataContractForm;
