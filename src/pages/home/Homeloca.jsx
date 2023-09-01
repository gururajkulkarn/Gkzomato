import React from 'react';
import { useRouter } from 'next/router';
import { Grid, Paper, Box } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
  width: '100%',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

const names = ["Pune Restaurants", "Mumbai Restaurants", "Hyderabad Restaurants", "Bengaluru Restaurants"];
const links = ["/pune", "/mumbai", "/hyderabad", "/bengaluru"];

export default function Homeloc() {
  const router = useRouter();

  return (
    <>
      <Grid container spacing={4}>
        {[lightTheme].map((theme, index) => (
          <Grid item xs={12} key={index}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  p: 2,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 2,
                }}
              >
                {[4, 4, 4, 4].map((elevation, cardIndex) => (
                  <Item key={elevation} elevation={elevation}>
                    <Link href={links[cardIndex]} passHref>
                      <p style={{ fontSize: "25px", textDecoration: 'none', color: 'inherit', margin: 0, padding: '10px' }}>{names[cardIndex]}</p>
                    </Link>
                  </Item>
                ))}
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
