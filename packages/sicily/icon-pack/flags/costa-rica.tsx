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
          fill="#D80027"
          d="M38.756 13.044H1.244A20 20 0 0 0 0 20c0 2.446.44 4.79 1.244 6.956h37.512A20 20 0 0 0 40 20c0-2.447-.44-4.79-1.244-6.956"
        />
        <path
          fill="#0052B4"
          d="M20 0C13.938 0 8.507 2.697 4.839 6.956H35.16C31.493 2.697 26.06 0 20 0M35.16 33.044H4.84C8.507 37.303 13.939 40 19.999 40c6.063 0 11.494-2.697 15.162-6.956"
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
Icon.displayName = 'CostaRica'
/**
 * Flags by `Deji.Zeal`: Costa Rica
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const CostaRica = Icon
