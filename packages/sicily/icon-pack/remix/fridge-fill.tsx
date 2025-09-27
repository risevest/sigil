import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M19.998 12v10a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V12zm-11 2h-2v5h2zm10-13a1 1 0 0 1 1 1v8h-16V2a1 1 0 0 1 1-1zm-10 3h-2v4h2z" />
    </svg>
  )
})
Icon.displayName = 'FridgeFill'
/**
 * Remix Icon: Fridge Fill
 * @see {@link https://remixicon.com/icon/fridge-fill Remix Icon Docs}
 */
export const FridgeFill = Icon
