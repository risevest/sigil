import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15 3H9v2h2v1.05C5.947 6.55 2 10.814 2 16v1h20v-1c0-5.185-3.947-9.449-9-9.95V5h2zm-3 5a8 8 0 0 1 7.938 7H4.062A8 8 0 0 1 12 8m11 12v-2H1v2z" />
    </svg>
  )
})
Icon.displayName = 'ServiceBellLine'
/**
 * Remix Icon: Service Bell Line
 * @see {@link https://remixicon.com/icon/service-bell-line Remix Icon Docs}
 */
export const ServiceBellLine = Icon
