import { SVGProps } from "react";

export const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  style={{ width: '1em', height: '1em' }}
  fill="none"
  viewBox="0 0 24 24"
  {...props}
>
  <path
    fill="#000"
    d="M10 6h1v1h-1V6zM14 6h-1v1h1V6zM6 6h1v1H6V6zM18 6h-1v1h1V6zM5 7h1v1H5V7zM19 7h-1v1h1V7zM5 12h1v1H5v-1zM19 12h-1v1h1v-1zM9 16h1v1H9v-1zM15 16h-1v1h1v-1zM10 17h1v1h-1v-1zM14 17h-1v1h1v-1zM8 15h1v1H8v-1zM16 15h-1v1h1v-1zM7 14h1v1H7v-1zM17 14h-1v1h1v-1zM6 13h1v1H6v-1zM18 13h-1v1h1v-1zM7 5v1h3V5H7zM17 6V5h-3v1h3zM19 12h1V8h-1v4zM4 12h1V8H4v4zM11 18v1h2v-1h-2zM11 7v1h2V7h-2z"
  ></path>
  <path
    fill="#ed0002"
    d="M13 18h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5V8h1V7h1V6h3v1h1v1h2V7h1V6h3v1h1v1h1v4h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1z"
  ></path>
</svg>
)