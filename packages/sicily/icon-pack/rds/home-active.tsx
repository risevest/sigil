import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 28 28" width="1em" height="1em" {...props}>
      <path d="m22.83 10.585-8.01-6.21c-.63-.5-1.51-.5-2.15 0l-8 6.21c-.43.33-.67.84-.67 1.38v12.26h19.5v-12.26c0-.53-.25-1.05-.67-1.38m-7.14 8.85c-.51.52-1.2.81-1.94.81s-1.45-.3-1.96-.82c-.5-.51-.79-1.2-.79-1.93s.29-1.43.8-1.94c.51-.52 1.2-.81 1.95-.81 1.52 0 2.75 1.23 2.75 2.75 0 .74-.29 1.43-.81 1.94" />
    </svg>
  )
})
Icon.displayName = 'HomeActive'
export const HomeActive = Icon
