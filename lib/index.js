"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFormContext = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_hook_form_1 = require("react-hook-form");
const hooks_1 = require("./hooks");
function createFormContext(initialState) {
    const Context = (0, react_2.createContext)(undefined);
    const result = {
        Provider: ({ children, defaultValues, ...formProps }) => {
            const methods = (0, react_hook_form_1.useForm)({
                ...formProps,
                defaultValues: { ...initialState, ...defaultValues },
            });
            return (react_1.default.createElement(Context.Provider, { value: methods },
                react_1.default.createElement(react_hook_form_1.FormProvider, { ...methods }, children)));
        },
        context: Context,
        useFormContext: function () {
            const context = (0, react_2.useContext)(Context);
            return context;
        },
        useWatch: (0, hooks_1.getUseWatch)(Context),
        useFormState: function (options) {
            const { control } = (0, react_2.useContext)(Context);
            const state = (0, react_hook_form_1.useFormState)({ control, ...options });
            return state;
        },
        useFieldArray: function ({ name, keyName, shouldUnregister, }) {
            const { control } = (0, react_2.useContext)(Context);
            const state = (0, react_hook_form_1.useFieldArray)({ control, name, keyName, shouldUnregister });
            return state;
        },
        Controller: function ({ name, ...rest }) {
            const context = (0, react_2.useContext)(Context);
            return react_1.default.createElement(react_hook_form_1.Controller, { ...rest, control: context.control, name: name });
        },
    };
    return result;
}
exports.createFormContext = createFormContext;
//# sourceMappingURL=index.js.map