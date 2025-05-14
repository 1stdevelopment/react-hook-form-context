import type { Context } from 'react';

/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react';
import { FieldValues } from 'react-hook-form';
import {
  DeepPartialSkipArrayKey,
  FieldPath,
  FieldPathValue,
  FieldPathValues,
  UseFormReturn,
  useWatch as useRHFWatch,
} from 'react-hook-form';

const getUseWatch = <TFieldValues extends FieldValues>(
  Context: Context<UseFormReturn<TFieldValues, object>>,
) => {
  function useWatch(props: {
    defaultValue?: DeepPartialSkipArrayKey<TFieldValues>;
    disabled?: boolean;
    exact?: boolean;
  }): DeepPartialSkipArrayKey<TFieldValues>;
  function useWatch<TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: {
    name: TFieldName;
    defaultValue?: FieldPathValue<TFieldValues, TFieldName>;
    disabled?: boolean;
    exact?: boolean;
  }): FieldPathValue<TFieldValues, TFieldName>;
  function useWatch<
    TFieldNames extends Array<FieldPath<TFieldValues>> = Array<FieldPath<TFieldValues>>,
  >(props: {
    name: readonly [...TFieldNames];
    defaultValue?: DeepPartialSkipArrayKey<TFieldValues>;
    disabled?: boolean;
    exact?: boolean;
  }): FieldPathValues<TFieldValues, TFieldNames>;
  function useWatch(): DeepPartialSkipArrayKey<TFieldValues>;

  function useWatch(props?: {
    exact?: boolean;
    disabled?: boolean;
    name?: FieldPath<TFieldValues> | FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[];
    defaultValue?: unknown;
  }) {
    const context = useContext(Context);
    const { defaultValue, name, disabled, exact } = props || {};

    if (name) {
      return useRHFWatch<TFieldValues>({
        control: context.control,
        defaultValue: defaultValue as DeepPartialSkipArrayKey<TFieldValues> | undefined,
        name: name as any,
        disabled,
        exact,
      });
    } else if (props) {
      return useRHFWatch<TFieldValues>({
        control: context.control,
        defaultValue: defaultValue as DeepPartialSkipArrayKey<TFieldValues> | undefined,
        disabled,
        exact,
      });
    } else return useRHFWatch<TFieldValues>();
  }
  return useWatch;
};

export { getUseWatch };
