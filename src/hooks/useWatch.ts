import { Context, useContext } from "react";
import { Control, FieldValues } from "react-hook-form";
import { DeepPartialSkipArrayKey, FieldPath, FieldPathValue, FieldPathValues, UseFormReturn, useWatch as useRHFWatch } from "react-hook-form";

const getUseWatch = <TFieldValues extends FieldValues>(Context: Context<UseFormReturn<TFieldValues, object>>) => {
  function useWatch(props: { defaultValue?: DeepPartialSkipArrayKey<TFieldValues>; disabled?: boolean; exact?: boolean }): TFieldValues;
  function useWatch<TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: {
    name: TFieldName;
    defaultValue?: FieldPathValue<TFieldValues, TFieldName>;
    disabled?: boolean;
    exact?: boolean;
  }): FieldPathValue<TFieldValues, TFieldName>;
  function useWatch<TFieldNames extends Array<FieldPath<TFieldValues>> = Array<FieldPath<TFieldValues>>>(props: {
    name: readonly [...TFieldNames];
    defaultValue?: DeepPartialSkipArrayKey<TFieldValues>;
    disabled?: boolean;
    exact?: boolean;
  }): FieldPathValues<TFieldValues, TFieldNames>;
  function useWatch(): TFieldValues;

  function useWatch(props?: {
    exact?: boolean;
    disabled?: boolean;
    name?: FieldPath<TFieldValues> | FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[];
    defaultValue?: unknown;
  }) {
    const context = useContext(Context);
    const control = context.control as Control<TFieldValues>;
    const { defaultValue, name, disabled, exact } = props || {};

    return useRHFWatch<TFieldValues>({
      control,
      defaultValue: defaultValue as DeepPartialSkipArrayKey<TFieldValues> | undefined,
      ...(name && { name }),
      disabled,
      exact,
    }) as unknown;
  }
  return useWatch;
};

export { getUseWatch };
