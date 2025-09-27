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
          fill="#000"
          d="M12.174 13.044h26.582C35.93 5.428 28.599 0 20 0A19.93 19.93 0 0 0 5.858 5.859z"
        />
        <path
          fill="#6DA544"
          d="M12.174 26.956h26.582C35.93 34.572 28.599 40 20 40A19.93 19.93 0 0 1 5.858 34.14z"
        />
        <path fill="#D80027" d="M5.858 5.858c-7.81 7.81-7.81 20.474 0 28.284L20 20z" />
        <path
          fill="#F0F0F0"
          d="m7.938 15.652 1.098 2.295 2.479-.573-1.11 2.29 1.993 1.58-2.482.56.007 2.544-1.985-1.592-1.985 1.592.007-2.544-2.481-.56 1.993-1.58-1.11-2.29 2.478.573z"
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
Icon.displayName = 'Jordan'
/**
 * Flags by `Deji.Zeal`: Jordan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Jordan = Icon
