// declare module '*.svg' {
//   const src: string;
//   export default src;
//   export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
// }

declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}