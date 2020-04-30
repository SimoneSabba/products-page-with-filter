import React from 'react';
import { shallow, mount } from 'enzyme';
import Layout from './Layout';

describe("when Layout component is used", () => {

  test('renders a div as parent element', () => {
      const wrapper = shallow(<Layout />);
      expect(wrapper.find('div').first().length).toEqual(1);
  });

  test('renders content inside <main> html tag', () => {
      const wrapper = mount(<Layout />);
      expect(wrapper.find('main').length).toBe(1);
  });

  test('renders header component', () => {
    const wrapper = mount(<Layout />);
    expect(wrapper.find('header').length).toBe(1);
  });

  test('renders children component', () => {
      const wrapper = shallow(<Layout> <p>children</p> </Layout>);
      const div = wrapper.find('div').first();
      expect(div.find('p').length).toBe(1);
      expect(div.find('p').html()).toEqual('<p>children</p>');
  });
});