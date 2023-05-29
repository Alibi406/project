import { DETAILS_DATA } from '../API/INITIAL_DATA';
import details from '../redux/details/details';

describe('Starting Details Page test suit', () => {
  test('Testing initial data to be empty list and loading true', () => {
   
    const expectedData = {
      loading: true,
      coinDetails: [],
    };

   
    const reducedData = details(undefined, { type: undefined, coinDetails: undefined });

    
    expect(reducedData).toEqual(expectedData);
    expect(reducedData.loading).toBeTruthy();
  });

  test('Mock API data should be returned', () => {
   
    const expectedData = DETAILS_DATA;
    const GET_DETAILS_ACTION = 'crypto/details/FETCH_DATA';

   
    const reducedData = details(undefined, {
      type: GET_DETAILS_ACTION, loading: false, coinDetails: expectedData,
    });

    expect(reducedData.coinDetails).toEqual(expectedData);
    expect(reducedData.loading).toBeFalsy();
  });
});
