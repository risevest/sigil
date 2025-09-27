import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#FFDA44"
          d="M28.695 1.985A19.9 19.9 0 0 0 19.999 0a19.9 19.9 0 0 0-8.695 1.985L9.564 20l1.74 18.016A19.9 19.9 0 0 0 19.999 40a19.9 19.9 0 0 0 8.696-1.984L30.434 20z"
        />
        <path
          fill="#496E2D"
          d="m20 13.044 1.727 5.314h5.588l-4.521 3.284 1.727 5.314L20 23.672l-4.52 3.284 1.726-5.314-4.52-3.284h5.587zM11.304 1.985C4.614 5.22 0 12.071 0 20s4.615 14.78 11.304 18.015z"
        />
        <path
          fill="#D80027"
          d="M28.695 1.985v36.03C35.385 34.78 40 27.929 40 20S35.385 5.22 28.695 1.985"
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
Icon.displayName = 'Senegal'
/**
 * Flags by `Deji.Zeal`: Senegal
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Senegal = Icon
