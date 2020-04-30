import React from 'react';
import { render, act, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios'
import {allProdsMock} from './testMock/allProducts.mock';

jest.mock('axios', () => ({get: jest.fn()}))

describe('when App is rendered ', ()=>{
  test('render App', async () => {
    axios.get.mockResolvedValueOnce({data: allProdsMock})
    const APIurl = 'wcs/resources/store/1/productview/byCategory/10023';
    await act(async () => {
      render(<App />);
    });
    
    // render title with the right item count
    expect(screen.getByText('Tablets')).toBeTruthy();
    const count = allProdsMock.CatalogEntryView.length;
    expect(screen.getByText(`${count} items`)).toBeTruthy();
    
    // render the filter block with the right values
    expect(screen.getByText(allProdsMock.FacetView[0].name)).toBeTruthy();
    expect(screen.getByText(allProdsMock.FacetView[1].name)).toBeTruthy();
  
    // render the right products
    expect(screen.getByText(allProdsMock.CatalogEntryView[0].name)).toBeTruthy();
    expect(screen.getByText(allProdsMock.CatalogEntryView[1].name)).toBeTruthy();
    expect(screen.getByText(allProdsMock.CatalogEntryView[2].name)).toBeTruthy();
  
    // call the right API once
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(APIurl);
    
  })
});
