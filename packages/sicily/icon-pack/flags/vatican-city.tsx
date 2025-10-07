import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#F0F0F0"
          d="M20 0c11.045 0 20 8.954 20 20s-8.955 20-20 20c0-.87-2.61-20-2.61-20z"
        />
        <path fill="#FFDA44" d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0" />
        <path
          fill="#ACABB1"
          d="m27.659 17.403 3.759 4.973a2.61 2.61 0 1 0 1.387-1.049l-5.858-7.75-1.387 1.05-2.081 1.572 2.097 2.775zm5.411 5.717a.87.87 0 1 1 1.049 1.387.87.87 0 0 1-1.049-1.387"
        />
        <path
          fill="#FFDA44"
          d="m34.106 18.974 2.097-2.774-2.08-1.574-1.388-1.048-5.858 7.75a2.61 2.61 0 1 0 1.387 1.048l3.759-4.973zm-7.325 5.364a.87.87 0 1 1-1.387-1.048.87.87 0 0 1 1.387 1.048"
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
Icon.displayName = 'VaticanCity'
/**
 * Flags by `Deji.Zeal`: Vatican City
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const VaticanCity = Icon
