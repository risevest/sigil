import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#FFDA44"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <path
          fill="#A2001D"
          d="M40 20c0-6.864-3.459-12.92-8.728-16.522H8.728C3.458 7.08 0 13.136 0 20s3.459 12.92 8.728 16.522h22.544C36.542 32.92 40 26.864 40 20"
        />
        <path
          fill="#FFDA44"
          d="M15.652 14.783h8.696v-3.479l-1.74.87L20 9.565l-2.608 2.609-1.74-.87zM27.826 20H23.48a2.007 2.007 0 1 0-3.506-1.948A2.006 2.006 0 1 0 16.468 20h-4.294c0 1.33 1.158 2.408 2.488 2.408h-.08c0 1.09.725 2.012 1.72 2.308l-1.954 1.954 1.844 1.845 2.617-2.617q.153.057.318.088l-1.581 3.57a6.5 6.5 0 0 0 2.454.48 6.5 6.5 0 0 0 2.454-.48l-1.581-3.57q.165-.03.318-.088l2.617 2.617 1.844-1.845-1.954-1.954a2.41 2.41 0 0 0 1.72-2.308h-.08c1.33 0 2.488-1.078 2.488-2.408"
        />
        <path
          fill="#6DA544"
          d="m20 21.304-2.826 1.305v2.608L20 26.958l2.826-1.74V22.61z"
        />
        <path fill="#0052B4" d="M17.174 20h5.652v3.478h-5.652z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})
Icon.displayName = 'Montenegro'
/**
 * Flags by `Deji.Zeal`: Montenegro
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Montenegro = Icon
