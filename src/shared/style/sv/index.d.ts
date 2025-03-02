/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { type DeterminedStyle, type Style } from "~/shared/style/types";
import { type OmitUndefined } from "~/shared/types";

export type StyleValue<S extends Style = Style> =
  | S
  | null
  | undefined
  | 0
  | 0n
  | false
  | StyleValue<S>[];

export type DetermineStyleFromStyleValue<
  S extends StyleValue,
  R = Exclude<S, null | undefined | 0 | 0n | false | unknown[]>,
> = R extends Style ? DeterminedStyle<R> : undefined;

type SVSlots = Record<string, StyleValue> | undefined;

type StringToBoolean<T> = T extends "true" | "false" ? boolean : T;

export type SVVariants<
  DS extends SVSlots | undefined,
  DB extends Style | undefined = undefined,
> = {
  [key: string]: {
    [key: string]: DS extends undefined ? DB : Partial<DS>;
  };
};

export type SVCompoundVariants<
  V extends SVVariants<DS, DB>,
  DS extends SVSlots,
  DB extends Style | undefined,
> = Array<
  {
    [K in keyof V]?:
      | StringToBoolean<keyof V[K]>
      | StringToBoolean<keyof V[K]>[];
  } & {
    style: DB extends undefined ? DS : DB;
  }
>;

export type SVDefaultVariants<
  V extends SVVariants<DS, any>,
  DS extends SVSlots,
> = {
  [K in keyof V]?: StringToBoolean<keyof V[K]>;
};

export type SVProps<
  V extends SVVariants<DS, any>,
  DS extends SVSlots,
  DV extends SVDefaultVariants<V, DS>,
> = V extends undefined
  ? never
  : {
      [K in keyof DV]?: StringToBoolean<keyof V[K]> | undefined;
    } & {
      [K in Exclude<keyof V, keyof DV>]: StringToBoolean<keyof V[K]>;
    };

export type SVVariantKeys<
  V extends SVVariants<DS, any>,
  DS extends SVSlots,
> = V extends object ? Array<keyof V> : undefined;

export type SVReturnProps<
  V extends SVVariants<DS, DB>,
  DS extends SVSlots,
  DB extends Style | undefined,
> = {
  base: DB;
  slots: DS;
  slotKeys: DS extends undefined ? undefined : (keyof DS)[];
  variants: V;
  defaultVariants: SVDefaultVariants<V, DS>;
  compoundVariants: SVCompoundVariants<V, DS, DB>;
  variantKeys: SVVariantKeys<V, DS>;
};

type HasSlots<S extends SVSlots> = S extends undefined ? false : true;

export type SVReturnType<
  V extends SVVariants<DS, DB>,
  DS extends SVSlots,
  DB extends Style | undefined,
  DV extends SVDefaultVariants<V, DS>,
> = {
  (props?: SVProps<V, DS, DV>): HasSlots<DS> extends true
    ? {
        [K in keyof (DS extends undefined ? {} : DS)]: (
          slotProps?: SVProps<V, DS, DV>,
        ) => K extends keyof DS
          ? DS[K] extends StyleValue
            ? DetermineStyleFromStyleValue<DS[K]>
            : never
          : never;
      }
    : DB;
} & SVReturnProps<V, DS, DB>;

export type SV = {
  <
    V extends SVVariants<DS, DB>,
    CV extends SVCompoundVariants<V, DS, DB>,
    DV extends SVDefaultVariants<V, DS>,
    B extends StyleValue = undefined,
    DB extends Style | undefined = B extends undefined
      ? undefined
      : DetermineStyleFromStyleValue<B>,
    S extends SVSlots = undefined,
    DS extends SVSlots = S extends undefined
      ? undefined
      : {
          [K in keyof S]: S[K] extends StyleValue
            ? StyleValue<DetermineStyleFromStyleValue<S[K]>>
            : never;
        },
  >(
    options?: {
      base?: B;
      slots?: S;
      variants?: V;
      compoundVariants?: CV;
      defaultVariants?: DV;
    } & (
      | {
          base?: B;
          slots?: never;
        }
      | {
          base?: never;
          slots?: S;
        }
    ),
  ): SVReturnType<V, DS, DB, DV>;
};

// main function
export declare const sv: SV;

export type VariantProps<Component extends (...args: any) => any> =
  OmitUndefined<Parameters<Component>[0]>;
