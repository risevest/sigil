import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#F0F0F0"
          d="M.944 13.913A20 20 0 0 0 0 20c0 2.122.332 4.167.944 6.087l19.056.87 19.056-.87A20 20 0 0 0 40 20c0-2.123-.332-4.168-.944-6.087L20 13.043z"
        />
        <path
          fill="#000"
          d="M40 20c0-1.186-.104-2.349-.302-3.478H.302a20.1 20.1 0 0 0 0 6.956h39.396c.198-1.13.302-2.292.302-3.478"
        />
        <path
          fill="#338AF3"
          d="M20 40c8.923 0 16.48-5.844 19.055-13.913H.945C3.52 34.156 11.076 40 20 40M20 0C11.077 0 3.52 5.844.944 13.913h38.111C36.48 5.844 28.923 0 20 0"
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
Icon.displayName = 'Botswana'
/**
 * Flags by `Deji.Zeal`: Botswana
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Botswana = Icon
