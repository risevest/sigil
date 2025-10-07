import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <rect width={40} height={40} fill="#fff" rx={20} />
        <path fill="#000" d="M-4-1.8h48v14.6H-4z" />
        <path fill="#017B3D" d="M-4 27h48v14.6H-4z" />
        <path fill="#CD1125" d="M.279 2.4 22.6 20.137.121 38-22.2 20.262z" />
      </g>
      <defs>
        <clipPath id="a">
          <rect width={40} height={40} fill="#fff" rx={20} />
        </clipPath>
      </defs>
    </svg>
  )
})
Icon.displayName = 'Palestine'
/**
 * Flags by `Deji.Zeal`: Palestine
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Palestine = Icon
