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
          fill="#0052B4"
          d="M27.531 15.652h-5.02L20 11.304l-2.51 4.348H12.47L14.98 20l-2.51 4.348h5.02L20 28.696l2.51-4.348h5.021L25.021 20zM23.084 20l-1.541 2.671h-3.084l-1.543-2.67 1.543-2.672h3.084zM20 14.658l.574.994h-1.147zm-4.626 2.671h1.148l-.574.994zm0 5.342.574-.994.574.994zM20 25.341l-.573-.993h1.147zm4.627-2.67h-1.148l.574-.994zm-1.148-5.342h1.148l-.574.994zM32.45 4.348H7.55a20.1 20.1 0 0 0-4.614 5.217h34.129a20.1 20.1 0 0 0-4.615-5.217M7.55 35.652h24.9a20.1 20.1 0 0 0 4.615-5.217H2.935a20.1 20.1 0 0 0 4.615 5.217"
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
Icon.displayName = 'Israel'
/**
 * Flags by `Deji.Zeal`: Israel
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Israel = Icon
