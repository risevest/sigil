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
          fill="#0052B4"
          d="M38.756 13.044H1.244A20 20 0 0 0 0 20c0 2.446.44 4.79 1.244 6.956h37.512A20 20 0 0 0 40 20c0-2.447-.44-4.79-1.244-6.956"
        />
        <path
          fill="#D80027"
          d="M20 0C13.94 0 8.509 2.697 4.84 6.956h30.322C31.494 2.697 26.062 0 20 0M35.162 33.044H4.84C8.508 37.303 13.94 40 20 40c6.063 0 11.494-2.697 15.162-6.956"
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
Icon.displayName = 'Thailand'
/**
 * Flags by `Deji.Zeal`: Thailand
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Thailand = Icon
