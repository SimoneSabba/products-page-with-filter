import React from 'react';
import { mount } from 'enzyme';
import ButtonFilter from './ButtonFilter';
import {allProdsMock} from '../../../testMock/allProducts.mock';

describe('when ButtonFilter component is used', () => {
  const filter = allProdsMock.FacetView[0].Entry[0];
  
  test('render button with label', () => {
    const wrapper = mount(
      <ButtonFilter 
        key={filter.entryValue}
        filter={filter}
        onClick={jest.fn()}
      />
    );

    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('.Button__label').find('span').first().text()).toBe(filter.label);
  })

  test('render button with icon', () => {
    const wrapper = mount(
      <ButtonFilter 
        key={filter.entryValue}
        filter={filter}
        showIcon
        onClick={jest.fn()}
      />
    );

    expect(wrapper.find('.MuiButton-endIcon').length).toBe(1);
  })

  test('render button disabled', () => {
    const isActive = true;
    const wrapper = mount(
      <ButtonFilter 
        key={filter.entryValue}
        filter={filter}
        isActive={isActive}
        onClick={jest.fn()}
      />
    );
    expect(wrapper.find('button').prop('disabled')).toBe(true);
  })
});
