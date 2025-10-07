import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14 2h-4v6H4v4h6v10h4V12h6V8h-6z" />
    </svg>
  )
})
Icon.displayName = 'CrossFill'
/**
 * Remix Icon: Cross Fill
 * @see {@link https://remixicon.com/icon/cross-fill Remix Icon Docs}
 */
export const CrossFill = Icon
