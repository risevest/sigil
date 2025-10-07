import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6.998 4v7l5-2.5 5 2.5V4h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 4-4.5-5h9zm1 3.236-1-.5-1 .5V20h2zm2 2.764v2h4v-2z" />
    </svg>
  )
})
Icon.displayName = 'ShirtFill'
/**
 * Remix Icon: Shirt Fill
 * @see {@link https://remixicon.com/icon/shirt-fill Remix Icon Docs}
 */
export const ShirtFill = Icon
