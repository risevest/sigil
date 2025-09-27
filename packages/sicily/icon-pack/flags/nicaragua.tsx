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
          fill="#338AF3"
          d="M20 0C12.07 0 5.22 4.614 1.984 11.304h36.031C34.78 4.614 27.93 0 20 0M20 40c7.929 0 14.78-4.614 18.015-11.304H1.985C5.218 35.386 12.07 40 20 40"
        />
        <path
          fill="#FFDA44"
          d="M20 13.913a6.087 6.087 0 1 0 0 12.174 6.087 6.087 0 0 0 0-12.174m0 9.565a3.478 3.478 0 1 1 0-6.956 3.478 3.478 0 0 1 0 6.956"
        />
        <path fill="#0052B4" d="M23.012 20.87 20 20l-3.012.87-1.005 1.739h8.033z" />
        <path fill="#338AF3" d="m20 15.652-2.008 3.479L20 20l2.009-.87z" />
        <path fill="#6DA544" d="M16.988 20.87h6.025l-1.004-1.74h-4.017z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})
Icon.displayName = 'Nicaragua'
/**
 * Flags by `Deji.Zeal`: Nicaragua
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Nicaragua = Icon
