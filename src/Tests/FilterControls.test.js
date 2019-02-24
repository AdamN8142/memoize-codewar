import React from 'react';
import FilterControls from '../FilterControls';
import { shallow } from 'enzyme';


describe('FilterControls', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <FilterControls 
      data={this.state.data} 
      toggleComplete={this.toggleComplete} 
      completed={this.state.completed}
      />
    )
   })


})