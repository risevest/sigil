import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-13h-4v2h9l-5-5zm-5 4 5 5v-3h4v-2z" />
    </svg>
  )
})
Icon.displayName = 'ExchangeFill'
/**
 * Remix Icon: Exchange Fill
 * @see {@link https://remixicon.com/icon/exchange-fill Remix Icon Docs}
 */
export const ExchangeFill = Icon
