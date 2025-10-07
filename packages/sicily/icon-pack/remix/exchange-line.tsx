import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-5-7h9v2h-4v3zm5-4v-3l5 5h-9v-2z" />
    </svg>
  )
})
Icon.displayName = 'ExchangeLine'
/**
 * Remix Icon: Exchange Line
 * @see {@link https://remixicon.com/icon/exchange-line Remix Icon Docs}
 */
export const ExchangeLine = Icon
