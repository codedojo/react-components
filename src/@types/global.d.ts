export { };

declare module '*.scss';

// declare module '*.scss' {
//     const content: Record<string, string>;
//     export default content;
// }

declare global {
    type Merge<A, B> = Omit<A, keyof B> & B;
}