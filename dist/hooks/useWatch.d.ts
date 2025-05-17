import { Context } from "react";
import { FieldValues } from "react-hook-form";
import { DeepPartialSkipArrayKey, FieldPathValue, FieldPathValues, UseFormReturn } from "react-hook-form";
declare const getUseWatch: <TFieldValues extends FieldValues>(Context: Context<UseFormReturn<TFieldValues, object>>) => {
    (props: {
        defaultValue?: DeepPartialSkipArrayKey<TFieldValues>;
        disabled?: boolean;
        exact?: boolean;
    }): TFieldValues;
    <TFieldName extends import("react-hook-form").Path<TFieldValues> = import("react-hook-form").Path<TFieldValues>>(props: {
        name: TFieldName;
        defaultValue?: import("react-hook-form").PathValue<TFieldValues, TFieldName>;
        disabled?: boolean;
        exact?: boolean;
    }): import("react-hook-form").PathValue<TFieldValues, TFieldName>;
    <TFieldNames extends import("react-hook-form").Path<TFieldValues>[] = import("react-hook-form").Path<TFieldValues>[]>(props: {
        name: readonly [...TFieldNames];
        defaultValue?: DeepPartialSkipArrayKey<TFieldValues>;
        disabled?: boolean;
        exact?: boolean;
    }): { [K in keyof TFieldNames]: import("react-hook-form").PathValue<TFieldValues, TFieldNames[K] & import("react-hook-form").Path<TFieldValues>>; };
    (): TFieldValues;
};
export { getUseWatch };
//# sourceMappingURL=useWatch.d.ts.map