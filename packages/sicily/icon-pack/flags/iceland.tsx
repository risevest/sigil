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
          fill="#0052B4"
          d="M.688 25.217a20 20 0 0 0 7.138 10.65v-10.65zM18.26 39.924Q19.122 40 20 40c9.24 0 17.016-6.267 19.31-14.783H18.26zM39.31 14.782C37.017 6.267 29.24 0 20 0q-.879 0-1.74.076v14.706zM7.826 4.132a20 20 0 0 0-7.138 10.65h7.138z"
        />
        <path
          fill="#D80027"
          d="M39.83 17.391H15.653V.475c-1.848.41-3.6 1.074-5.217 1.957v14.96H.169a20.2 20.2 0 0 0 0 5.217h10.266v14.96a19.9 19.9 0 0 0 5.217 1.956V22.609h24.179a20.2 20.2 0 0 0 0-5.218"
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
Icon.displayName = 'Iceland'
/**
 * Flags by `Deji.Zeal`: Iceland
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Iceland = Icon
