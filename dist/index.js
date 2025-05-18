import React, { useContext, createContext } from 'react';
import { useWatch, useForm, FormProvider, useFormState, useFieldArray, Controller } from 'react-hook-form';

const getUseWatch = (Context) => {
    function useWatch$1(props) {
        const context = useContext(Context);
        const control = context.control;
        const { defaultValue, name, disabled, exact } = props || {};
        return useWatch({
            control,
            defaultValue: defaultValue,
            ...(name && { name }),
            disabled,
            exact,
        });
    }
    return useWatch$1;
};

function createFormContext(initialState) {
    const Context = createContext(undefined);
    const result = {
        Provider: ({ children, defaultValues, ...formProps }) => {
            const methods = useForm({
                ...formProps,
                defaultValues: { ...initialState, ...defaultValues },
            });
            return (React.createElement(Context.Provider, { value: methods },
                React.createElement(FormProvider, { ...methods }, children)));
        },
        context: Context,
        useFormContext: function () {
            const context = useContext(Context);
            return context;
        },
        useWatch: getUseWatch(Context),
        useFormState: function (options) {
            const { control } = useContext(Context);
            const state = useFormState({ control, ...options });
            return state;
        },
        useFieldArray: function ({ name, keyName, shouldUnregister, }) {
            const { control } = useContext(Context);
            const state = useFieldArray({ control, name, keyName, shouldUnregister });
            return state;
        },
        Controller: function ({ name, ...rest }) {
            const context = useContext(Context);
            return React.createElement(Controller, { ...rest, control: context.control, name: name });
        },
        withFormProvider: function (Component, formProps) {
            return (props) => {
                const Provider = this.Provider;
                return (React.createElement(Provider, { ...formProps },
                    React.createElement(Component, { ...props })));
            };
        },
    };
    return result;
}

export { createFormContext };
