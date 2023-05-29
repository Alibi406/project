import HomeMock from '../API/INITIAL_DATA';
import HomeReducer from '../redux/home/home';

describe('Test suit for home reducer', () => {
  it('Home reducer should return empty list in the begining and loading true', () => {
    
    const expectedData = {
      loading: true,
      coinData: [],
    };

   
    const reducedData = HomeReducer(undefined, { type: undefined, payload: undefined });

   
    expect(reducedData).toEqual(expectedData);
    expect(reducedData.loading).toBeTruthy();
  });

  it('Test reducer if returns the mock API data', () => {
  
    const expectedData = HomeMock;
    const FETCH_ACTION = 'crypto/Home/FETCH_DATA';

    
    const reducedData = HomeReducer(undefined, {
      type: FETCH_ACTION, loading: false, payload: expectedData,
    });

   
    expect(reducedData.coinData).toEqual(expectedData);
    expect(reducedData.loading).toBeFalsy();
  });
});
