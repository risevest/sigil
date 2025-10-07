import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.955 0 20s8.954 20 20 20"
        />
        <path
          fill="#000"
          d="M38.44 12.246C35.413 5.052 28.298 0 20 0A19.93 19.93 0 0 0 5.86 5.859l5.008 6.387z"
        />
        <path
          fill="#496E2D"
          d="m10.925 27.681-5.066 6.46A19.93 19.93 0 0 0 20.001 40c8.324 0 15.46-5.086 18.47-12.319z"
        />
        <path
          fill="#A2001D"
          d="M4.348 14.71v10.507H39.31A20 20 0 0 0 40 20a20 20 0 0 0-.708-5.29z"
        />
        <path fill="#0052B4" d="M5.858 5.858c-7.81 7.81-7.81 20.474 0 28.284L20 20z" />
        <path
          fill="#FFDA44"
          d="m6.515 15.028 2.441 3.406 3.995-1.27-2.485 3.375 2.44 3.407-3.977-1.321-2.485 3.374.027-4.19-3.977-1.322 3.994-1.269z"
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
Icon.displayName = 'SouthSudan'
/**
 * Flags by `Deji.Zeal`: South Sudan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SouthSudan = Icon
