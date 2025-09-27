import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width={40} height={40} fill="#0182FF" rx={20} />
          <path fill="#F00A17" d="M-6.4 36 42.594 1.365l3.233 4.573-48.994 34.635z" />
          <path
            fill="#FCD504"
            d="m8 8.4 1.123 3.455h3.632L9.816 13.99l1.123 3.455L8 15.31l-2.939 2.135 1.123-3.455-2.94-2.135h3.633z"
          />
          <path
            fill="#FFD600"
            d="M-7.4 34.835 41.594.2l.924 1.307-48.994 34.635zM-3.8 41.035 45.194 6.4l.924 1.307L-2.876 42.34z"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
        <clipPath id="b">
          <rect width={40} height={40} fill="#fff" rx={20} />
        </clipPath>
      </defs>
    </svg>
  )
})
Icon.displayName = 'DemocraticRepublicOfTheCongo'
/**
 * Flags by `Deji.Zeal`: Democratic Republic Of The Congo
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const DemocraticRepublicOfTheCongo = Icon
