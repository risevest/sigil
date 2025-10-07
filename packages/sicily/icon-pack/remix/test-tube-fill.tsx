import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17 2v2h-1v14a4 4 0 0 1-8 0V4H7V2zm-4 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3-8h-4v4h4z" />
    </svg>
  )
})
Icon.displayName = 'TestTubeFill'
/**
 * Remix Icon: Test Tube Fill
 * @see {@link https://remixicon.com/icon/test-tube-fill Remix Icon Docs}
 */
export const TestTubeFill = Icon
