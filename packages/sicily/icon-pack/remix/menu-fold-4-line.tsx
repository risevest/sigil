import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 4H7v2h14zm0 7H11v2h10zm0 7H7v2h14zM1.99 8.814 3.402 7.4 8 11.996l-4.597 4.596-1.414-1.414 3.182-3.182z" />
    </svg>
  )
})
Icon.displayName = 'MenuFold4Line'
/**
 * Remix Icon: Menu Fold 4 Line
 * @see {@link https://remixicon.com/icon/menu-fold-4-line Remix Icon Docs}
 */
export const MenuFold4Line = Icon
