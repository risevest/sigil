import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#A2001D"
          d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 20 0 20 0s20 8.954 20 20"
        />
        <path fill="#0052B4" d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20" />
        <path fill="#F0F0F0" d="M26.956 25.217 20 24.347l-6.957.87V14.783h13.913z" />
        <path
          fill="#0052B4"
          d="M20 24.348a3.478 3.478 0 1 0 0-6.957 3.478 3.478 0 0 0 0 6.957"
        />
        <path
          fill="#A2001D"
          d="M20 22.609a1.74 1.74 0 1 0 0-3.479 1.74 1.74 0 0 0 0 3.479"
        />
        <path fill="#6DA544" d="M17.392 16.522h5.217L20 19.13z" />
        <path fill="#FFDA44" d="M19.13 18.26h1.739v5.218h-1.74z" />
        <path fill="#6DA544" d="M22.782 22.956h-5.565l-4.174 2.261h13.913z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})
Icon.displayName = 'Haiti'
/**
 * Flags by `Deji.Zeal`: Haiti
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Haiti = Icon
