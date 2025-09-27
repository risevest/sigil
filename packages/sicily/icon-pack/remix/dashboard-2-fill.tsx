import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 3a7 7 0 0 0-5.106 11.789l.156.16 1.414-1.414a5 5 0 0 1 4.83-8.366l1.564-1.56A7 7 0 0 0 12 5m6.392 4.143-1.561 1.562a5.01 5.01 0 0 1-1.295 4.83l1.414 1.415A6.98 6.98 0 0 0 19 12a7 7 0 0 0-.608-2.857m-2.15-2.8-3.725 3.725A2.003 2.003 0 0 0 10 12a2 2 0 1 0 3.932-.517l3.725-3.726z" />
    </svg>
  )
})
Icon.displayName = 'Dashboard2Fill'
/**
 * Remix Icon: Dashboard 2 Fill
 * @see {@link https://remixicon.com/icon/dashboard-2-fill Remix Icon Docs}
 */
export const Dashboard2Fill = Icon
