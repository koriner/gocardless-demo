// TODO: API core goes here

import type { MerchantPayout, MerchantPayoutAPIData, MerchantsAPIResponse } from '@lib/types/merchants';
import { sleep } from '@lib/utils/utils';
import axios from 'axios';

const _api_instance = axios.create({
  headers: {
    Accept: 'application/json',
    // Authorization: '', from cookies, local storage, or auth settings
  },
  baseURL: 'https://simpledebit.gocardless.io',
});

const API = {
  // Get merchant payout details
  getAllMerchantPayoutDetails: async (): Promise<MerchantPayout[]> => {
    const results: MerchantPayout[] = [];
    const merchantsRes = await _api_instance.get<MerchantsAPIResponse>('/merchants');
    
    // We have all the merchant IDs now
    const merchantIds = merchantsRes.data;

    // Next, create a list of requests to retrieve payouts for each merchant
    const requestPromises = merchantIds.map((id) => {
      return _api_instance.get(`/merchants/${id}`);
    });

    // Await all and process successful results
    const responses = await Promise.allSettled(requestPromises);

    responses.forEach((entry) => {
      const entryResult = entry as MerchantPayoutAPIData;
      
      if (entryResult.status === 'fulfilled') {
        results.push(entryResult.value.data);
      }
    });

    // Simple little wait to show loading states since the API is quite fast
    await sleep(1000);

    return results;
  },
};

export default API;

