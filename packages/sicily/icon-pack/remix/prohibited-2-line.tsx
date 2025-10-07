import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M16.906 5.68 5.68 16.906A8 8 0 0 1 16.906 5.68M7.094 18.32 18.32 7.094A8 8 0 0 1 7.094 18.32M12 2C6.477 2 2 6.477 2 12s4.478 10 10 10 10-4.477 10-10S17.522 2 12 2" />
    </svg>
  )
})
Icon.displayName = 'Prohibited2Line'
/**
 * Remix Icon: Prohibited 2 Line
 * @see {@link https://remixicon.com/icon/prohibited-2-line Remix Icon Docs}
 */
export const Prohibited2Line = Icon
