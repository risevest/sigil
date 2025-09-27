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
          d="M20 0C13.457 0 7.648 3.143 3.999 8h32.002C32.35 3.143 26.543 0 20 0M20 40c6.543 0 12.352-3.142 16-8H4c3.649 4.858 9.458 8 16 8M0 20c0 1.37.138 2.708.4 4h39.2c.262-1.292.4-2.63.4-4s-.138-2.707-.4-4H.4c-.262 1.293-.4 2.63-.4 4"
        />
        <path fill="#D80027" d="M5.858 5.858c-7.81 7.81-7.81 20.474 0 28.284L20 20z" />
        <path
          fill="#F0F0F0"
          d="m8.094 14.783 1.295 3.985h4.191l-3.39 2.464 1.295 3.985-3.39-2.463-3.391 2.463 1.295-3.985-3.39-2.464h4.19z"
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
Icon.displayName = 'Cuba'
/**
 * Flags by `Deji.Zeal`: Cuba
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Cuba = Icon
