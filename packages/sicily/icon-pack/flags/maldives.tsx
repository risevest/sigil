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
        <path fill="#6DA544" d="M6.956 10.435h26.087v19.13H6.956z" />
        <path
          fill="#F0F0F0"
          d="M23.221 25.652a5.652 5.652 0 1 1 2.689-10.625 6.957 6.957 0 1 0 0 9.946c-.8.433-1.715.68-2.689.68"
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
Icon.displayName = 'Maldives'
/**
 * Flags by `Deji.Zeal`: Maldives
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Maldives = Icon
