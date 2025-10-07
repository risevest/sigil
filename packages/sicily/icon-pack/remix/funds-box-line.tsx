import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4.005 5.003v14h16v-14zm-1-2h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m11.793 6.793-1.793-1.793h5v5l-1.793-1.793-3.864 3.864-2.121-2.121-2.829 2.828-1.414-1.414 4.243-4.243 2.121 2.121z" />
    </svg>
  )
})
Icon.displayName = 'FundsBoxLine'
/**
 * Remix Icon: Funds Box Line
 * @see {@link https://remixicon.com/icon/funds-box-line Remix Icon Docs}
 */
export const FundsBoxLine = Icon
