import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 6v3H5V6zM3 4v7h7V4zm10 0h8v2h-8zm0 7h8v2h-8zm0 7h8v2h-8zm-2.293-1.793-1.414-1.414L6 18.086l-1.793-1.793-1.414 1.414L6 20.914z" />
    </svg>
  )
})
Icon.displayName = 'ListCheck3'
/**
 * Remix Icon: List Check 3
 * @see {@link https://remixicon.com/icon/list-check-3 Remix Icon Docs}
 */
export const ListCheck3 = Icon
