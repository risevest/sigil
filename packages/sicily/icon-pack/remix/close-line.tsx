import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 10.587 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.415 1.414-4.95-4.95-4.949 4.95-1.414-1.415 4.95-4.95-4.95-4.95L7.05 5.638z" />
    </svg>
  )
})
Icon.displayName = 'CloseLine'
/**
 * Remix Icon: Close Line
 * @see {@link https://remixicon.com/icon/close-line Remix Icon Docs}
 */
export const CloseLine = Icon
