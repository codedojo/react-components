import * as React from 'react';

export type Merge<T1, T2> = Omit<T2, keyof T1> & T1;

export type As<P> = React.ElementType<P>;

export type Children = React.ReactNode | React.ReactNode[];

export interface AsProp<As extends React.ElementType = React.ElementType> {
    as?: As;
}

export type Props<CustomProps = object, BuiltinProps = HTMLProps> = Merge<CustomProps, BuiltinProps>;

export type PropsWithChildren<CustomProps = object, BuiltinProps = HTMLProps> = Merge<Props<CustomProps, BuiltinProps>, {
    children?: Children;
}>;

export interface ChangeEvent<T extends Element = HTMLElement> {
    target: {
        name?: string;
        value?: any;
    } & T;
}

export interface ChangeEventData {
    value?: unknown;
    checked?: boolean;
}

export declare type SelectionEvents = ChangeEvent | React.ChangeEvent<HTMLElement> | React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>;

export type HTMLProps = React.HTMLAttributes<HTMLElement>;
export type HTMLAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>;
export type HTMLHeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
export type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type HTMLLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;
export type HTMLListProps = React.OlHTMLAttributes<HTMLOListElement> & React.HTMLAttributes<HTMLUListElement>;
export type HTMLListItemProps = React.LiHTMLAttributes<HTMLLIElement>;
export type HTMLParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
export type HTMLSelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;
export type HTMLSpanProps = React.HTMLAttributes<HTMLSpanElement>;
export type HTMLTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;