import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 3h3.6v3.6h3.6v3.6h3.6V6.6h3.6V3H21v18h-3.6v-7.2h-3.6v3.6h-3.6v-3.6H6.6V21H3z" />
    </svg>
  )
})
Icon.displayName = 'MixtralFill'
/**
 * Remix Icon: Mixtral Fill
 * @see {@link https://remixicon.com/icon/mixtral-fill Remix Icon Docs}
 */
export const MixtralFill = Icon
