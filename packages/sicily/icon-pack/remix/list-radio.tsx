import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8.5 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0m2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0M21 4h-8v2h8zm0 7h-8v2h8zm0 7h-8v2h8zM6.5 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </svg>
  )
})
Icon.displayName = 'ListRadio'
/**
 * Remix Icon: List Radio
 * @see {@link https://remixicon.com/icon/list-radio Remix Icon Docs}
 */
export const ListRadio = Icon
