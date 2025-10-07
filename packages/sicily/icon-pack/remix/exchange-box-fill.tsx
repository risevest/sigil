import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m9 6h-4v2h9l-5-5zm-5 4 5 5v-3h4v-2z" />
    </svg>
  )
})
Icon.displayName = 'ExchangeBoxFill'
/**
 * Remix Icon: Exchange Box Fill
 * @see {@link https://remixicon.com/icon/exchange-box-fill Remix Icon Docs}
 */
export const ExchangeBoxFill = Icon
