import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#FFDA44"
          d="M0 20c0 3.465.881 6.724 2.432 9.565L20 31.305l17.568-1.74A19.9 19.9 0 0 0 40 20l-20-1.739z"
        />
        <path
          fill="#338AF3"
          d="M37.568 10.435C34.176 4.218 27.581 0 20 0 12.42 0 5.824 4.218 2.432 10.435A19.9 19.9 0 0 0 0 20h40c0-3.465-.882-6.724-2.432-9.565"
        />
        <path
          fill="#496E2D"
          d="M20 40c7.58 0 14.176-4.218 17.568-10.435H2.432C5.824 35.782 12.419 40 20 40"
        />
        <path
          fill="#FFDA44"
          d="m22.608 11.705 2.443 1.149-1.3 2.365 2.652-.507.336 2.68 1.847-1.971 1.848 1.97.336-2.679 2.652.507-1.3-2.365 2.442-1.15-2.443-1.148 1.301-2.366-2.652.508-.336-2.68-1.848 1.97-1.847-1.97-.336 2.68-2.653-.508 1.301 2.366z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})
Icon.displayName = 'Rwanda'
/**
 * Flags by `Deji.Zeal`: Rwanda
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Rwanda = Icon
