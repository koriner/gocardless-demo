import { describe, it, expect } from 'vitest';
import { parseMerchantPayoutData } from './merchantParser';
import type { MerchantPayout } from '@lib/types/merchants';

const TEST_DATA: MerchantPayout[] = [
  {
    id: 'id_1',
    iban: 'iban_1',
    discount: {
      minimum_transaction_count: 2,
      fees_discount: 10,
    },
    transactions: [
      {
        amount: 100,
        fee: 10,
      },
      {
        amount: 200,
        fee: 20,
      },
      {
        amount: 300,
        fee: 30,
      }
    ],
  },
  {
    id: 'id_2',
    iban: 'iban_2',
    discount: {
      minimum_transaction_count: 10,
      fees_discount: 10,
    },
    transactions: [
      {
        amount: 200,
        fee: 40,
      },{
        amount: 300,
        fee: 50,
      }
    ],
  },
]

describe('@lib/parsers/merchantParser', () => {
  it('calculates correct discount when minimum transactions are exceeded', () => {
    const result = parseMerchantPayoutData(TEST_DATA[0]);
    expect(result.totalAmount).toEqual(600) // (100 + 200 + 300)
    expect(result.feesAmount).toEqual(30); // (10 + 20 + 30) - (10 * 3 transactions) == 30
    expect(result.netAmount).toEqual(570) // (100 + 200 + 300) - 30
    expect(result.discountAmount).toEqual(30);
  });

  it('does not apply discount when minimum transactions are not exceeded', () => {
    const result = parseMerchantPayoutData(TEST_DATA[1]);
    expect(result.totalAmount).toEqual(500) // (200 + 300)
    expect(result.feesAmount).toEqual(90); // (40 + 50)
    expect(result.netAmount).toEqual(410) // (200 + 300) - 90
    expect(result.discountAmount).toEqual(0);
  });
});