import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <path
          fill="#0052B4"
          d="M39.882 22.174 17.95.103c-.99.1-1.958.274-2.9.514C6.4 2.82 0 20 0 20s28 18.737 31.194 16.575q.96-.648 1.835-1.402l-12.998-13z"
        />
        <path
          fill="#D80027"
          d="M34.783 20 15.332.55C6.538 2.651 0 10.561 0 20c0 11.046 8.954 20 20 20 4.19 0 8.078-1.29 11.291-3.491L14.783 20z"
        />
        <path
          fill="#F0F0F0"
          d="m19.021 29.53-2.443-1.148 1.301-2.366-2.652.508-.336-2.68-1.848 1.97-1.847-1.97-.336 2.68-2.653-.508 1.301 2.366-2.443 1.149 2.443 1.149-1.3 2.365 2.652-.507.336 2.68 1.847-1.972 1.848 1.971.336-2.68 2.652.508-1.3-2.365zM17.391 11.092l-1.776-.835.946-1.72-1.93.368-.244-1.949-1.344 1.434L11.7 6.956l-.245 1.95-1.93-.37.947 1.72-1.777.836 4.348.87z"
        />
        <path fill="#F0F0F0" d="M18.261 11.092a5.217 5.217 0 1 1-10.435 0" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})
Icon.displayName = 'Nepal'
/**
 * Flags by `Deji.Zeal`: Nepal
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Nepal = Icon
