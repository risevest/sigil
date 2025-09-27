import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 21v-2h3V5H8V3h8v2h-3v14h3v2zM18.05 7.05 23 12l-4.95 4.95-1.414-1.414L20.172 12l-3.536-3.536zm-12.1 0 1.414 1.414L3.828 12l3.536 3.536L5.95 16.95 1 12z" />
    </svg>
  )
})
Icon.displayName = 'InputCursorMove'
/**
 * Remix Icon: Input Cursor Move
 * @see {@link https://remixicon.com/icon/input-cursor-move Remix Icon Docs}
 */
export const InputCursorMove = Icon
