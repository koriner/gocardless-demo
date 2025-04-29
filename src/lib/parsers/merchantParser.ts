/**
 * Parsing function for API data to convert to calculated display information
 */

import type { MerchantPayout, MerchantPayoutTableData } from "@lib/types/merchants";

export const parseMerchantPayoutData = (source: MerchantPayout): MerchantPayoutTableData => {
  const data: MerchantPayoutTableData = {
    merchantId: source.id,
    iban: source.iban,
    totalAmount: 0,
    netAmount: 0,
    feesAmount: 0,
    discountAmount: 0,
  };

  const applyDiscount = source.transactions.length >= source.discount.minimum_transaction_count;

  // Calculate total sum of transactions & fees amount
  const totalAmt = source.transactions.reduce((acc, value) => acc + value.amount, 0);
  let totalFees = source.transactions.reduce((acc, value) => acc + value.fee, 0);

  // Calculate discount, if any
  if (applyDiscount) {
    data.discountAmount = source.transactions.length * source.discount.fees_discount;
    totalFees -= data.discountAmount;
  }

  data.totalAmount = totalAmt;
  data.feesAmount = totalFees;
  data.netAmount = totalAmt - totalFees;

  return data;
};
