import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#D80027"
          d="M0 20c0 2.447.44 4.79 1.244 6.957l18.756.87 18.756-.87A20 20 0 0 0 40 20c0-2.446-.44-4.79-1.244-6.956L20 12.174l-18.756.87A20 20 0 0 0 0 20"
        />
        <path
          fill="#000"
          d="M20 0C11.4 0 4.07 5.428 1.244 13.044h37.512C35.93 5.428 28.6 0 20 0"
        />
        <path
          fill="#496E2D"
          d="M38.756 26.957H1.244C4.07 34.572 11.401 40 20 40s15.93-5.428 18.756-13.044"
        />
        <path
          fill="#D80027"
          d="m25.978 9.565-2.443-1.149 1.301-2.365-2.652.507-.336-2.68L20 5.85l-1.847-1.97-.336 2.68-2.653-.508 1.301 2.365-2.442 1.15z"
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
Icon.displayName = 'Malawi'
/**
 * Flags by `Deji.Zeal`: Malawi
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Malawi = Icon
