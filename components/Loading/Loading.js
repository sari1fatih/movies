import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
export default function Loading() {
    return (
        <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100vh", width: "100vw" }}>
            <CircularProgress />
        </div>
    )
}
