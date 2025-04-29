export type MerchantsAPIResponse = string[];

export interface MerchantPayout {
  id: string;
  iban: string;
  discount: {
    minimum_transaction_count: number;
    fees_discount: number;
  };
  transactions: Array<{
    amount: number;
    fee: number;
  }>
};

export interface MerchantPayoutAPIData {
  status: 'fulfilled' | 'rejected',
  value: {
    data: MerchantPayout;
  };
}

export interface MerchantPayoutTableData {
  iban: string;
  merchantId: string;
  totalAmount: number;
  feesAmount: number;
  netAmount: number;
  discountAmount: number;
}