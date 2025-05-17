import React from "react";
import { ReactNode } from "react";
import { ControllerProps, FieldValues, Path, UseFormProps, UseFormReturn } from "react-hook-form";
declare function createFormContext<TFieldValues extends FieldValues>(initialState: TFieldValues): {
    Provider: ({ children, defaultValues, ...formProps }: {
        children: ReactNode;
    } & Partial<{
        mode: keyof import("react-hook-form").ValidationMode;
        reValidateMode: "onBlur" | "onChange" | "onSubmit";
        defaultValues: import("react-hook-form").DeepPartial<TFieldValues> | ((payload?: unknown) => Promise<TFieldValues>);
        values: TFieldValues;
        resetOptions: Partial<{
            keepDirtyValues: boolean;
            keepErrors: boolean;
            keepDirty: boolean;
            keepValues: boolean;
            keepDefaultValues: boolean;
            keepIsSubmitted: boolean;
            keepTouched: boolean;
            keepIsValid: boolean;
            keepSubmitCount: boolean;
        }> | undefined;
        resolver: import("react-hook-form").Resolver<TFieldValues, any>;
        context: any;
        shouldFocusError: boolean;
        shouldUnregister: boolean;
        shouldUseNativeValidation: boolean;
        criteriaMode: import("react-hook-form").CriteriaMode;
        delayError: number;
    }>) => JSX.Element;
    context: React.Context<UseFormReturn<TFieldValues, object>>;
    useFormContext: () => UseFormReturn<TFieldValues, object>;
    useWatch: {
        (props: {
            defaultValue?: import("react-hook-form").DeepPartialSkipArrayKey<TFieldValues> | undefined;
            disabled?: boolean | undefined;
            exact?: boolean | undefined;
        }): TFieldValues;
        <TFieldName extends Path<TFieldValues> = Path<TFieldValues>>(props: {
            name: TFieldName;
            defaultValue?: import("react-hook-form").PathValue<TFieldValues, TFieldName> | undefined;
            disabled?: boolean | undefined;
            exact?: boolean | undefined;
        }): import("react-hook-form").PathValue<TFieldValues, TFieldName>;
        <TFieldNames extends Path<TFieldValues>[] = Path<TFieldValues>[]>(props: {
            name: readonly [...TFieldNames];
            defaultValue?: import("react-hook-form").DeepPartialSkipArrayKey<TFieldValues> | undefined;
            disabled?: boolean | undefined;
            exact?: boolean | undefined;
        }): { [K in keyof TFieldNames]: import("react-hook-form").PathValue<TFieldValues, TFieldNames[K] & Path<TFieldValues>>; };
        (): TFieldValues;
    };
    useFormState: (options?: Partial<{
        disabled: boolean;
        name: Path<TFieldValues> | Path<TFieldValues>[] | readonly Path<TFieldValues>[];
        exact: boolean;
    }>) => import("react-hook-form").UseFormStateReturn<TFieldValues>;
    useFieldArray: <TFieldArrayName extends import("react-hook-form").ArrayPath<TFieldValues> = import("react-hook-form").ArrayPath<TFieldValues>, TKeyName extends string = "id">({ name, keyName, shouldUnregister, }: {
        name: TFieldArrayName;
        keyName?: TKeyName | undefined;
        shouldUnregister?: boolean | undefined;
    }) => import("react-hook-form").UseFieldArrayReturn<TFieldValues, TFieldArrayName, TKeyName>;
    Controller: <TName extends Path<TFieldValues> = Path<TFieldValues>>({ name, ...rest }: Omit<ControllerProps<TFieldValues, TName>, "control">) => JSX.Element;
    withFormProvider: <P extends object = {}>(Component: (props: P) => JSX.Element, formProps?: UseFormProps<TFieldValues>) => (props: P) => JSX.Element;
};
export { createFormContext };
//# sourceMappingURL=index.d.ts.map