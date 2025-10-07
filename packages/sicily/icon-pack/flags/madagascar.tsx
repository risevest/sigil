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
          fill="#6DA544"
          d="M13.044 20v18.756A20 20 0 0 0 20 40c11.046 0 20-8.954 20-20s-26.956 0-26.956 0"
        />
        <path
          fill="#D80027"
          d="M20 0c-2.446 0-4.79.44-6.956 1.244V20H40C40 8.954 31.046 0 20 0"
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
Icon.displayName = 'Madagascar'
/**
 * Flags by `Deji.Zeal`: Madagascar
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Madagascar = Icon
