import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.865-5.135L8 9H2V3l2.447 2.446A9.98 9.98 0 0 1 12 2m1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7z" />
    </svg>
  )
})
Icon.displayName = 'HistoryFill'
/**
 * Remix Icon: History Fill
 * @see {@link https://remixicon.com/icon/history-fill Remix Icon Docs}
 */
export const HistoryFill = Icon
