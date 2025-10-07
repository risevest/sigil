import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 4h13v2H8zm-5-.5h3v3H3zm0 7h3v3H3zm0 7h3v3H3zM8 11h13v2H8zm0 7h13v2H8z" />
    </svg>
  )
})
Icon.displayName = 'ListCheck'
/**
 * Remix Icon: List Check
 * @see {@link https://remixicon.com/icon/list-check Remix Icon Docs}
 */
export const ListCheck = Icon
