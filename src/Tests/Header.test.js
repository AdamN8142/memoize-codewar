import React from 'react';
import Header from '../Header';
import { shallow } from 'enzyme'

describe("header", () => {
  let wrapper; 

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})