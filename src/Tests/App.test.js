import React from 'react';
// import ReactDOM from 'react-dom';
import App from '../App';
import dataSet from '../dataSet'
import { shallow } from "enzyme";

describe("App", () => {
  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(
      <App />
    )
  })

  it("should have the proper default state", () => {
    expect(wrapper.state()).toEqual({data: dataSet.codeWars, completed:[]})
  })

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  })
});