import React from 'react';
import FilterControls from '../FilterControls';
import { shallow } from 'enzyme';


const mockData = {
  data: [
    {
      "id": 1,
      "name": "Abbreviate a Two Word Name",
      "type": "String",
      "prompt": "Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.",
      "level": "8 kyu",
      "replLink": "https://repl.it/@codesForDays/Abbreviate-a-Two-Word-Name?language=nodejs&folderId=",
      "addedToStorage": false
    },
    {
      "id": 2,
      "name": "Welcome to the City",
      "type": "String",
      "prompt": "Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.",
      "level": "8 kyu",
      "replLink": "https://repl.it/@codesForDays/Welcome-to-the-City?language=nodejs&folderId=",
      "addedToStorage": false
    },
      {
      "id": 3,
      "name": "Remove Anchor from URL",
      "type": "String",
      "prompt": "Complete the function/method so that it returns the url with anything after the anchor (#) removed.",
      "level": "7 kyu",
      "replLink": "https://repl.it/@codesForDays/Remove-anchor-from-URL?language=nodejs&folderId=",
      "addedToStorage": false
    },
    {
      "id": 4,
      "name": "Alphabet War",
      "type": "Fundamentals",
      "prompt": "Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.",
      "level": "7 kyu",
      "replLink": "https://repl.it/@codesForDays/Alphabet-war?language=nodejs&folderId=",
      "addedToStorage": false
    }
  ],
  toggleComplete: jest.fn(),
  completed: [
    {
      "id": 4,
      "name": "Alphabet War",
      "type": "Fundamentals",
      "prompt": "Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.",
      "level": "7 kyu",
      "replLink": "https://repl.it/@codesForDays/Alphabet-war?language=nodejs&folderId=",
      "addedToStorage": false
    }
  ]
}



describe('FilterControls', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <FilterControls 
      {...mockData}
      />
    )
  })

   it("should have the proper default state", () => {
     expect(wrapper.state()).toEqual({chosenCategory: "", completed: []})
   })

   it("should match the snapshot will all data passed in", () => {
     expect(wrapper).toMatchSnapshot()
   })

   it("should set the state to 8kyu", () => {
      expect(wrapper.state()).toEqual({chosenCategory: "", completed: []})
      wrapper.find("#lvl-1-btn").first().simulate("click", { target: { value: "8 kyu"}})
      expect(wrapper.state()).toEqual({chosenCategory: "8 kyu", completed: []})
    })

  it("should set the state to 8kyu", () => {
      expect(wrapper.state()).toEqual({chosenCategory: "", completed: []})
      wrapper.find("#lvl-2-btn").first().simulate("click", { target: { value: "7 kyu"}})
      expect(wrapper.state()).toEqual({chosenCategory: "7 kyu", completed: []})
    })

  it("should set the state to 8kyu", () => {
      expect(wrapper.state()).toEqual({chosenCategory: "", completed: []})
      wrapper.find("#lvl-3-btn").first().simulate("click", { target: { value: "6 kyu"}})
      expect(wrapper.state()).toEqual({chosenCategory: "6 kyu", completed: []})
    })  

    


})