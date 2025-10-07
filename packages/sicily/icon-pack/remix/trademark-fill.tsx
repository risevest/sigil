import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10 6v2H6v10H4V8H0V6zm2 0h2.5l3 5.196L20.5 6H23v12h-2V9.133l-3.5 6.063L14 9.135V18h-2z" />
    </svg>
  )
})
Icon.displayName = 'TrademarkFill'
/**
 * Remix Icon: Trademark Fill
 * @see {@link https://remixicon.com/icon/trademark-fill Remix Icon Docs}
 */
export const TrademarkFill = Icon
