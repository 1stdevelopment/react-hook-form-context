"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUseWatch = void 0;
/* eslint-disable react-hooks/rules-of-hooks */
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const getUseWatch = (Context) => {
    function useWatch(props) {
        const context = (0, react_1.useContext)(Context);
        const { defaultValue, name, disabled, exact } = props || {};
        if (name) {
            return (0, react_hook_form_1.useWatch)({
                control: context.control,
                defaultValue: defaultValue,
                name: name,
                disabled,
                exact,
            });
        }
        else if (props) {
            return (0, react_hook_form_1.useWatch)({
                control: context.control,
                defaultValue: defaultValue,
                disabled,
                exact,
            });
        }
        else
            return (0, react_hook_form_1.useWatch)();
    }
    return useWatch;
};
exports.getUseWatch = getUseWatch;
//# sourceMappingURL=useWatch.js.map