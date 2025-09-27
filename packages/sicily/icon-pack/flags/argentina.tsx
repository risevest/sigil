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
          fill="#338AF3"
          d="M20 0C12.07 0 5.22 4.614 1.984 11.304h36.031C34.78 4.614 27.93 0 20 0M20 40c7.929 0 14.78-4.614 18.015-11.304H1.985C5.218 35.386 12.07 40 20 40"
        />
        <path
          fill="#FFDA44"
          d="m25.978 20-2.443 1.149 1.301 2.366-2.652-.508-.336 2.68L20 23.715l-1.847 1.97-.336-2.679-2.653.507 1.301-2.365L14.023 20l2.442-1.149-1.3-2.366 2.652.508.336-2.68L20 16.285l1.848-1.97.336 2.679 2.652-.508-1.3 2.366z"
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
Icon.displayName = 'Argentina'
/**
 * Flags by `Deji.Zeal`: Argentina
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Argentina = Icon
