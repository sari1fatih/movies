import React from 'react'
import Alert from '@mui/material/Alert';
export default function Error({ error = '' }) {
    return (
        <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100vh", width: "100vw" }}>
            <Alert severity="error">{error}</Alert>
        </div>
    )
}
