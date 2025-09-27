import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#338AF3"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <path fill="#F3F3F3" d="M12.61 26.956h14.782l-7.391-17.39z" />
        <path fill="#333" d="M15.178 25.217 20 14.247l4.823 10.97z" />
        <path fill="#FFDA44" d="M12.61 26.957h14.782L20.001 20z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})
Icon.displayName = 'SaintLucia'
/**
 * Flags by `Deji.Zeal`: Saint Lucia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SaintLucia = Icon
