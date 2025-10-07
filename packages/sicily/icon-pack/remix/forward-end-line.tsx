import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22 4a1 1 0 0 0-1 1v5.666l-9.223-6.148a.5.5 0 0 0-.777.416v5.732L1.777 4.518A.5.5 0 0 0 1 4.934v14.132a.5.5 0 0 0 .777.416L11 13.333v5.733a.5.5 0 0 0 .777.416L21 13.333V19a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1M3 7.737 9.394 12 3 16.263zm10 8.526V7.737L19.394 12z" />
    </svg>
  )
})
Icon.displayName = 'ForwardEndLine'
/**
 * Remix Icon: Forward End Line
 * @see {@link https://remixicon.com/icon/forward-end-line Remix Icon Docs}
 */
export const ForwardEndLine = Icon
