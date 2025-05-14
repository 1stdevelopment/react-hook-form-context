"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const react_1 = require("@testing-library/react");
require("@testing-library/jest-dom");
const react_2 = __importDefault(require("react"));
test("create context", () => {
    const FormContext = (0, __1.createFormContext)({
        param: "",
        filters: [],
    });
    const Status = () => {
        const { param } = FormContext.useWatch();
        return react_2.default.createElement("div", { "aria-label": "result", "data-param": param });
    };
    const Input = () => {
        return (react_2.default.createElement(FormContext.Controller, { name: "param", render: ({ field }) => {
                return react_2.default.createElement("input", { ...field, "aria-label": "input" });
            } }));
    };
    (0, react_1.render)(react_2.default.createElement(FormContext.Provider, null,
        react_2.default.createElement(Status, null),
        react_2.default.createElement(Input, null)));
    const input = react_1.screen.getByLabelText("input");
    react_1.fireEvent.change(input, { target: { value: "test" } });
    const result = react_1.screen.getByLabelText("result");
    expect(result.getAttribute("data-param")).toBe("test");
});
//# sourceMappingURL=main.test.js.map