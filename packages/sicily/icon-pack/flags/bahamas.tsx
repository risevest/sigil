import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#FFDA44"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <path
          fill="#338AF3"
          d="M12.174 13.044h26.582C35.93 5.428 28.599 0 20 0A19.93 19.93 0 0 0 5.858 5.86zM12.174 26.957h26.582C35.93 34.573 28.599 40 20 40a19.93 19.93 0 0 1-14.142-5.858z"
        />
        <path fill="#000" d="M5.858 5.858c-7.81 7.81-7.81 20.474 0 28.284L20 20z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})
Icon.displayName = 'Bahamas'
/**
 * Flags by `Deji.Zeal`: Bahamas
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Bahamas = Icon
