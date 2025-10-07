import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#FFDA44"
          d="M26.957 1.244A20 20 0 0 0 20 0c-2.447 0-4.79.44-6.957 1.244L12.173 20l.87 18.756A20 20 0 0 0 20 40c2.446 0 4.79-.44 6.956-1.244L27.827 20z"
        />
        <path
          fill="#D80027"
          d="M0 20c0 8.6 5.428 15.93 13.044 18.756V1.244C5.428 4.07 0 11.4 0 20"
        />
        <path
          fill="#6DA544"
          d="M40 20c0-8.6-5.428-15.93-13.044-18.756v37.512C34.572 35.93 40 28.599 40 20"
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
Icon.displayName = 'Guinea'
/**
 * Flags by `Deji.Zeal`: Guinea
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Guinea = Icon
