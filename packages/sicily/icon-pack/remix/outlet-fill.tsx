import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m2-12v4h2v-4zm-6 0v4h2v-4z" />
    </svg>
  )
})
Icon.displayName = 'OutletFill'
/**
 * Remix Icon: Outlet Fill
 * @see {@link https://remixicon.com/icon/outlet-fill Remix Icon Docs}
 */
export const OutletFill = Icon
