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
          fill="#FF9811"
          d="M20 0C12.07 0 5.22 4.614 1.984 11.304h36.031C34.78 4.614 27.93 0 20 0"
        />
        <path
          fill="#6DA544"
          d="M20 40c7.929 0 14.78-4.614 18.015-11.304H1.985C5.218 35.386 12.07 40 20 40"
        />
        <path
          fill="#0052B4"
          d="M20 26.956a6.956 6.956 0 1 0 0-13.913 6.956 6.956 0 0 0 0 13.913"
        />
        <path
          fill="#F0F0F0"
          d="M20 24.348a4.348 4.348 0 1 0 0-8.696 4.348 4.348 0 0 0 0 8.696"
        />
        <path
          fill="#0052B4"
          d="m20 14.635 1.341 3.042 3.305-.36L22.682 20l1.964 2.683-3.305-.36L20 25.365l-1.341-3.042-3.305.36L17.317 20l-1.963-2.683 3.305.36z"
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
Icon.displayName = 'India'
/**
 * Flags by `Deji.Zeal`: India
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const India = Icon
