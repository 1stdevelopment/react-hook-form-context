// react-hook-form.d.ts
import "react-hook-form";

declare module "react-hook-form" {
  // Assuming TFieldValues is a generic type that you want to use
  // You may need to adjust this based on your actual usage
  export function useWatch<TFieldValues = any>(props: {
    defaultValue?: DeepPartialSkipArrayKey<TFieldValues> | undefined;
    disabled?: boolean | undefined;
    exact?: boolean | undefined;
  }): TFieldValues;

  export function useWatch<TFieldName extends Path<TFieldValues> = Path<TFieldValues>>(props: {
    name: TFieldName;
    defaultValue?: PathValue<TFieldValues, TFieldName> | undefined;
    disabled?: boolean | undefined;
    exact?: boolean | undefined;
  }): PathValue<TFieldValues, TFieldName>;

  export function useWatch<TFieldNames extends Path<TFieldValues>[] = Path<TFieldValues>[]>(props: {
    name: readonly [...TFieldNames];
    defaultValue?: DeepPartialSkipArrayKey<TFieldValues> | undefined;
    disabled?: boolean | undefined;
    exact?: boolean | undefined;
  }): { [K in keyof TFieldNames]: PathValue<TFieldValues, TFieldNames[K] & Path<TFieldValues>> };

  export function useWatch(): TFieldValues;
}
