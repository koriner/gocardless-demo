import type { MerchantPayout } from '@lib/types/merchants';
import { useState, useEffect, useMemo } from 'react';
import API from '@lib/api/index';
import { Box, CircularProgress, Typography } from '@mui/material';
import PayoutTable from '@components/PayoutTable/PayoutTable';
import { parseMerchantPayoutData } from '@lib/parsers/merchantParser';

function PayoutsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [payoutsData, setPayoutsData] = useState<MerchantPayout[]>([]);

  async function loadData() {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setPayoutsData([]);
    const data = await API.getAllMerchantPayoutDetails();
    setPayoutsData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log('RUNNING');
    if (isLoading) {
      return;
    }
    
    void loadData();
    /* eslint-disable */
  }, []);

  const parsedPayoutData = useMemo(() => {
    return payoutsData.map((item) => parseMerchantPayoutData(item));
  }, [payoutsData]); 

  return (
    <Box sx={{
      p: 4,
      textAlign: 'left',
    }}>
      <div data-testid="PayoutsPage">
        <Typography variant="h4" component="h1">Payouts</Typography>
        {
          isLoading && (
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={4}>
              <CircularProgress color="secondary" sx={{ mb: 2 }} />
              <Typography variant='body1'>Loading data...</Typography>
            </Box>
          )
        }
        {
          !isLoading && (
            <PayoutTable
              data={parsedPayoutData}
            />
          )
        }
      </div>
    </Box>
  );
}

export default PayoutsPage;
