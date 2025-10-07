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
          fill="#A2001D"
          d="M5.858 34.142a20 20 0 0 0 2.673 2.246L36.388 8.531a20.1 20.1 0 0 0-4.919-4.919L3.612 31.47a20 20 0 0 0 2.246 2.673"
        />
        <path
          fill="#0052B4"
          d="M5.858 5.858c-6.31 6.31-7.52 15.785-3.636 23.312L29.17 2.222C21.644-1.663 12.168-.452 5.858 5.858"
        />
        <path
          fill="#496E2D"
          d="M34.142 34.142c6.31-6.31 7.521-15.785 3.637-23.312L10.83 37.778c7.527 3.885 17.003 2.674 23.312-3.636"
        />
        <path
          fill="#FFDA44"
          d="m16.522 11.304-2.241 1.054 1.193 2.17-2.433-.465-.309 2.459-1.695-1.808-1.695 1.808-.308-2.458-2.434.465 1.194-2.17-2.241-1.055 2.24-1.054L6.6 8.08l2.434.465.308-2.458 1.695 1.808 1.695-1.808.309 2.458 2.433-.465-1.193 2.17z"
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
Icon.displayName = 'Namibia'
/**
 * Flags by `Deji.Zeal`: Namibia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Namibia = Icon
