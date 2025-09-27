import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none">
        <path d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M5 3.5a1.5 1.5 0 1 0 0 3h5.5V20a1.5 1.5 0 0 0 3 0V6.5H19a1.5 1.5 0 0 0 0-3z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'TextFill'
/**
 * MingCute Icon: Text Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TextFill = Icon
