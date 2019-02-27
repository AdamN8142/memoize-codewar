import React from "react";
import CardContainer from "../CardContainer";
import { shallow } from "enzyme";


describe("CardContainer", () => {
  
  let wrapper;
  const mockProps = {
    toggleComplete: jest.fn(),
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
      }
    ],
    filteredCategories: [
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
      }
    ],
  filteredCompleted: jest.fn() 
  }
  beforeEach(() => {
    wrapper = shallow(
      <CardContainer
      {...mockProps}
      />
    )
  })

 
  it("should match the snapshot with all data passed in", () => {
      expect(wrapper).toMatchSnapshot()
  })

})