import React from "react";
import Card from "../Card";
import { shallow } from "enzyme";
import { isFulfilled } from "q";

const mockProps = {
  toggleComplete: jest.fn(),
  key: 1,
  codeWar: {
    id: 1,
    name: "Abbreviate a Two Word Name",
    type: "String",
    prompt: "Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.",
    level: "8 kyu",
    replLink: "https://repl.it/@codesForDays/Abbreviate-a-Two-Word-Name?language=nodejs&folderId=",
    addedToStorage: false,
    },
  completed: [{
    id: 1,
    name: "Abbreviate a Two Word Name",
    type: "String",
    prompt: "Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.",
    level: "8 kyu",
    replLink: "https://repl.it/@codesForDays/Abbreviate-a-Two-Word-Name?language=nodejs&folderId=",
    addedToStorage: false,
    },]
}

describe('Card', () => {
  let wrapper; 

  beforeEach(()=> {
    wrapper = shallow (
      <Card 
      {...mockProps}/>
    )
  })

  it("should match the snapshot will all data passed in", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should toggle the solution", () => {
    expect(wrapper.state()).toEqual({toggledSolution: false});
    wrapper.find(".see-solution-btn").first().simulate("click", { target: { id: 1}})
    expect(wrapper.state()).toEqual({toggledSolution: true})
  })

})