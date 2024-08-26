import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Modal, Box } from '@mui/material';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [dataContracts, setDataContracts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch data contracts from an API
        const fetchDataContracts = async () => {
            try {
                const response = await axios.get('/api/data-contracts'); // Adjust the API endpoint as needed
                setDataContracts(response.data);
            } catch (error) {
                console.error('Error fetching data contracts:', error);
            }
        };

        fetchDataContracts();
    }, []);

    const handleCreateNew = () => {
        navigate('/create');
    };

    return (
        <div className="container mt-4">
            <Typography variant="h4" align="center" gutterBottom>
                Data Contracts
            </Typography>
            <Button variant="contained" color="primary" onClick={handleCreateNew}>
                Create New
            </Button>

            <TableContainer component={Paper} className="mt-4">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Version</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataContracts.map((contract) => (
                            <TableRow key={contract.id}>
                                <TableCell>{contract.id}</TableCell>
                                <TableCell>{contract.info.title}</TableCell>
                                <TableCell>{contract.info.version}</TableCell>
                                <TableCell>{contract.info.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default LandingPage;
