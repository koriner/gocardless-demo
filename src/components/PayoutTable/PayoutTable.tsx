import type { MerchantPayoutTableData } from "@lib/types/merchants";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@mui/material";

export interface PayoutTableProps {
  data: MerchantPayoutTableData[];
};

const currencyFormatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

/**
 * Convert a GBP numeric value to a friendly string
 * 
 * @param value number
 */
function formatCurrency(value: number): string {
  return `${currencyFormatter.format(value / 100)} GBP`;
};

const PayoutTable: React.FC<PayoutTableProps> = ({
    data,
}) => {
  const theme = useTheme();

  return (
    (
      <section>
        <Box pt={4}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="payouts data table">
              <TableHead>
                <TableRow
                  sx={{
                    'th': {
                      fontWeight: theme.typography.fontWeightBold
                    }
                  }}
                >
                  <TableCell>IBAN</TableCell>
                  <TableCell>Merchant</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Fees</TableCell>
                  <TableCell align="right">Discount</TableCell>
                  <TableCell align="right">Net</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.merchantId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.iban}
                    </TableCell>
                    <TableCell>{row.merchantId}</TableCell>
                    <TableCell align="right">{formatCurrency(row.totalAmount)}</TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: theme.palette.error.main }}>
                        {formatCurrency(-row.feesAmount)}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: theme.palette.success.main }}>
                        {formatCurrency(-row.discountAmount)}
                    </TableCell>
                    <TableCell align="right">{formatCurrency(row.netAmount)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </section>
    )
  );
};

export default PayoutTable;