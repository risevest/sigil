import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#D80027"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <path
          fill="#F0F0F0"
          d="m19.18 16.343 1.642 2.261 2.658-.862-1.644 2.26 1.64 2.261-2.656-.865-1.643 2.26.001-2.794-2.657-.865 2.658-.862z"
        />
        <path
          fill="#F0F0F0"
          d="M14.703 25.652a5.652 5.652 0 1 1 2.688-10.625 6.956 6.956 0 1 0 0 9.946c-.8.433-1.715.68-2.688.68"
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
Icon.displayName = 'Turkey'
/**
 * Flags by `Deji.Zeal`: Turkey
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Turkey = Icon
