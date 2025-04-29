import { Box, Typography } from '@mui/material'; 
import '@styles/app.css';

function IndexPage() {
  return (
    <>
      <Box pt={4}>
        <Typography
          component="h2"
          variant="h1"
          sx={{
            fontSize: '2rem',
          }}
        >
          Welcome to GoCardless SimpleDebit
        </Typography>
        <br />
        <Typography variant="body1">
          Check out the "Payouts" screen for transactions.
        </Typography>
      </Box>
    </>
  )
}

export default IndexPage;
