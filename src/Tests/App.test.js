import React from 'react';
// import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from "enzyme";

describe("App", () => {
  let wrapper;

  let mockData = {
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
  }

  beforeEach(()=> {
    wrapper = shallow(
      <App />
    )
  })

  it("should have the proper default state", () => {
    expect(wrapper.state()).toEqual({data: [], completed:[]})
  })

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  })

  it("should toggle the completed prop", () => {
    let expected = [
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
        "addedToStorage": true
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
    ]
    wrapper.setState({data:mockData.data})
    wrapper.instance().toggleComplete(2)
    expect(wrapper.state("data")).toEqual(expected)

  })

});