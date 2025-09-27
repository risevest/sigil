import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m17 18.172-2.535-2.536-1.414 1.414L18 22l4.95-4.95-1.415-1.414L19 18.172V11a8 8 0 1 0-16 0v9h2v-9a6 6 0 1 1 12 0z" />
    </svg>
  )
})
Icon.displayName = 'ArrowTurnBackLine'
/**
 * Remix Icon: Arrow Turn Back Line
 * @see {@link https://remixicon.com/icon/arrow-turn-back-line Remix Icon Docs}
 */
export const ArrowTurnBackLine = Icon
