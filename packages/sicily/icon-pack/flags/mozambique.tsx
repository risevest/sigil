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
          fill="#FFDA44"
          d="m10.81 27.826-4.952 6.316A19.93 19.93 0 0 0 20 40c8.268 0 15.363-5.018 18.409-12.174z"
        />
        <path
          fill="#496E2D"
          d="M38.44 12.246C35.41 5.052 28.296 0 20 0A19.93 19.93 0 0 0 5.858 5.859l5.009 6.387z"
        />
        <path
          fill="#000"
          d="M4.348 14.71v10.507H39.31A20 20 0 0 0 40 20a20 20 0 0 0-.708-5.29z"
        />
        <path fill="#A2001D" d="M5.858 5.858c-7.81 7.81-7.81 20.474 0 28.284L20 20z" />
        <path
          fill="#FFDA44"
          d="m8.094 14.783 1.295 3.985h4.191l-3.39 2.464 1.295 3.986-3.39-2.464-3.391 2.464 1.295-3.986-3.39-2.464h4.19z"
        />
        <path fill="#F0F0F0" d="M4.306 20h7.58v3.478h-7.58z" />
        <path
          fill="#000"
          d="m13.32 16.013-1.23-1.23-3.995 3.996-3.996-3.996-1.23 1.23 4 3.992-4 4 1.23 1.213 3.996-3.99 3.996 3.99 1.23-1.214-4-4z"
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
Icon.displayName = 'Mozambique'
/**
 * Flags by `Deji.Zeal`: Mozambique
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Mozambique = Icon
