import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#D80027"
          d="M2.432 10.435 20 12.174l17.568-1.74C34.176 4.219 27.581 0 20 0S5.824 4.218 2.432 10.435"
        />
        <path
          fill="#FFDA44"
          d="M2.432 29.565 20 31.305l17.568-1.74A19.9 19.9 0 0 0 40 20l-20-1.739-20 1.74c0 3.464.881 6.723 2.432 9.564"
        />
        <path
          fill="#0052B4"
          d="M2.432 10.435A19.9 19.9 0 0 0 0 20h40c0-3.465-.882-6.724-2.432-9.565H2.432"
        />
        <path
          fill="#6DA544"
          d="M20 40c7.58 0 14.176-4.218 17.568-10.435H2.432C5.824 35.782 12.419 40 20 40"
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
Icon.displayName = 'Mauritius'
/**
 * Flags by `Deji.Zeal`: Mauritius
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Mauritius = Icon
