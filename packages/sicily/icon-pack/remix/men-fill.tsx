import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18.586 5H14V3h8v8h-2V6.414l-3.537 3.537a7.5 7.5 0 1 1-1.414-1.414z" />
    </svg>
  )
})
Icon.displayName = 'MenFill'
/**
 * Remix Icon: Men Fill
 * @see {@link https://remixicon.com/icon/men-fill Remix Icon Docs}
 */
export const MenFill = Icon
