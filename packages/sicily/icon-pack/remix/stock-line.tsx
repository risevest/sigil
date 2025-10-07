import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8.005 5.003h3v9h-3v3h-2v-3h-3v-9h3v-3h2zm-3 2v5h4v-5zm13 3h3v9h-3v3h-2v-3h-3v-9h3v-3h2zm-3 2v5h4v-5z" />
    </svg>
  )
})
Icon.displayName = 'StockLine'
/**
 * Remix Icon: Stock Line
 * @see {@link https://remixicon.com/icon/stock-line Remix Icon Docs}
 */
export const StockLine = Icon
