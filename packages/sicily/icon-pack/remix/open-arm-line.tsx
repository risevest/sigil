import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18 17v5h-2v-5c0-4.451 2.644-8.285 6.448-10.016l.827 1.82A9 9 0 0 0 18 17M8 17v5H6v-5A9 9 0 0 0 .726 8.805l.827-1.821A11 11 0 0 1 8 17m4-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </svg>
  )
})
Icon.displayName = 'OpenArmLine'
/**
 * Remix Icon: Open Arm Line
 * @see {@link https://remixicon.com/icon/open-arm-line Remix Icon Docs}
 */
export const OpenArmLine = Icon
