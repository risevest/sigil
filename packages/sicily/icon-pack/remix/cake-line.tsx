import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 7v4h7a1 1 0 0 1 1 1v8h2v2H1v-2h2v-8a1 1 0 0 1 1-1h7V7zm6 6H5v7h14zM13.83.402A3 3 0 0 1 12.732 4.5L11 5.5a3 3 0 0 1 1.098-4.098z" />
    </svg>
  )
})
Icon.displayName = 'CakeLine'
/**
 * Remix Icon: Cake Line
 * @see {@link https://remixicon.com/icon/cake-line Remix Icon Docs}
 */
export const CakeLine = Icon
