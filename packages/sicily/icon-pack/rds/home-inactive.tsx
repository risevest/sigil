import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 28 28" width="1em" height="1em" {...props}>
      <path d="M23.5 23.228H4v-12.26c0-.54.24-1.04.66-1.38l8.01-6.22c.63-.49 1.52-.49 2.15 0l8.01 6.22c.42.33.67.85.67 1.38zm-18-1.5H22v-10.76c0-.07-.04-.15-.1-.2l-8-6.22a.255.255 0 0 0-.31 0l-8 6.22c-.06.04-.09.12-.09.2zm8.25-2.48c-.74 0-1.45-.3-1.96-.82-.51-.51-.79-1.2-.79-1.93s.28-1.42.8-1.94c.51-.52 1.2-.81 1.95-.81 1.52 0 2.75 1.23 2.75 2.75 0 .74-.29 1.43-.81 1.94-.51.52-1.2.81-1.94.81m0-4c-.34 0-.66.13-.88.36-.24.24-.37.55-.37.89s.13.65.36.88c.46.48 1.31.48 1.76 0h.01c.23-.24.36-.55.36-.89 0-.69-.56-1.25-1.25-1.25z" />
    </svg>
  )
})
Icon.displayName = 'HomeInactive'
export const HomeInactive = Icon
