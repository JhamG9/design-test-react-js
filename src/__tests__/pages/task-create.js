import React from "react";
import { create } from "react-test-renderer";
import { TaskCreate } from "../../app/pages/task-create";

describe("Unit test TaskCreate component", () => {
    const component = create(<TaskCreate />);

    it("Matches the snapshot", () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

});