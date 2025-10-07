import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#0052B4"
          d="M20 40c11.046 0 20-8.954 20-20 0-3.357-.828-6.52-2.29-9.297l-17.733 9.32 9.32-17.734A19.9 19.9 0 0 0 20 0C8.954 0 0 8.954 0 20a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 20 40"
        />
        <path
          fill="#F0F0F0"
          d="M37.69 10.725a20 20 0 0 0-3.572-4.844 20 20 0 0 0-4.843-3.57L5.834 34.166z"
        />
        <path fill="#FF9811" d="m5.834 34.166 31.855-23.441a20 20 0 0 0-3.57-4.844z" />
        <path
          fill="#F0F0F0"
          d="m17.368 11.728-2.443 1.15 1.3 2.365-2.652-.508-.336 2.68-1.847-1.97-1.848 1.97-.336-2.68-2.652.508 1.3-2.366-2.442-1.149 2.443-1.149-1.3-2.365 2.651.507.336-2.68 1.848 1.971 1.847-1.97.336 2.68 2.653-.508-1.3 2.365z"
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
Icon.displayName = 'MarshallIsland'
/**
 * Flags by `Deji.Zeal`: Marshall Island
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const MarshallIsland = Icon
