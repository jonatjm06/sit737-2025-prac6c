import * as React from 'react';
import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function MediaCard() {
  const [status, setStatus] = useState("Idle");

  const startScan = async () => {
    setStatus("Scanning...");
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE}/scan`);
      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      setStatus("Error initiating scan");
    }
  };
  return (
    <div>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cloud-Based Penetration Testing Toolkit
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Cards Grid */}
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Run Scan
                </Typography>
                <Typography variant="body2" color="text.secondary">
                This module interacts with the backend to trigger a scan and display results in real time.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Start</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Security Checks
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Start</Button>
                <Button size="small" onClick={startScan}>View</Button>
              </CardActions>
            </Card>
          </Grid>

                    {/* Card 3 */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Bug Scnning
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Start</Button>
                <Button size="small" onClick={startScan}>View</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <p className="mt-4 text-lg">Status: {status}</p>
      </Container>
    </div>
  );
}
