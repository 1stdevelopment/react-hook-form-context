import React, { ReactNode, createContext, useContext } from "react";
import {
  Controller,
  ControllerProps,
  FieldArrayPath,
  FieldPath,
  FieldValues,
  FormProvider,
  Path,
  UseFormProps,
  UseFormReturn,
  useFieldArray,
  useForm,
  useFormState,
} from "react-hook-form";
import { getUseWatch } from "./hooks/useWatch";

export function createFormContext<TFieldValues extends FieldValues>(initialState: TFieldValues) {
  const Context = createContext<UseFormReturn<TFieldValues, object>>(undefined as any);

  const result = {
    Provider: ({
      children,
      defaultValues,
      ...formProps
    }: {
      children: ReactNode;
    } & UseFormProps<TFieldValues>) => {
      const methods = useForm<TFieldValues>({
        ...formProps,
        defaultValues: { ...initialState, ...defaultValues } as any,
      });
      return (
        <Context.Provider value={methods}>
          <FormProvider<TFieldValues> {...methods}>{children}</FormProvider>
        </Context.Provider>
      );
    },
    context: Context,
    useFormContext: function () {
      const context = useContext(Context);
      return context;
    },
    useWatch: getUseWatch<TFieldValues>(Context),

    useFormState: function (
      options?: Partial<{
        disabled: boolean;
        name: Path<TFieldValues> | Path<TFieldValues>[] | readonly Path<TFieldValues>[];
        exact: boolean;
      }>
    ) {
      const { control } = useContext(Context);
      const state = useFormState({ control, ...options });
      return state;
    },

    useFieldArray: function <TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>, TKeyName extends string = "id">({
      name,
      keyName,
      shouldUnregister,
    }: {
      name: TFieldArrayName;
      keyName?: TKeyName;
      shouldUnregister?: boolean;
    }) {
      const { control } = useContext(Context);

      const state = useFieldArray({ control, name, keyName, shouldUnregister });
      return state;
    },
    Controller: function <TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
      name,
      ...rest
    }: Omit<ControllerProps<TFieldValues, TName>, "control">) {
      const context = useContext(Context);
      return <Controller {...rest} control={context.control} name={name} />;
    },
    withFormProvider: function <P extends object = {}>(Component: (props: P) => JSX.Element, formProps?: UseFormProps<TFieldValues>) {
      return (props: P) => {
        const Provider = this.Provider;
        return (
          <Provider {...formProps}>
            <Component {...props} />
          </Provider>
        );
      };
    },
  };
  return result;
}
