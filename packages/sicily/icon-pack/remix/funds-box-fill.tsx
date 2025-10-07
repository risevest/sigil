import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m11.793 6.793-2.45 2.45-2.121-2.122-4.243 4.243 1.414 1.414 2.829-2.828 2.121 2.12 3.864-3.863 1.793 1.793v-5h-5z" />
    </svg>
  )
})
Icon.displayName = 'FundsBoxFill'
/**
 * Remix Icon: Funds Box Fill
 * @see {@link https://remixicon.com/icon/funds-box-fill Remix Icon Docs}
 */
export const FundsBoxFill = Icon
