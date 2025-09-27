import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22 8v2h-4.323l-.464 2.636A4.006 4.006 0 0 1 22.25 16.5a4 4 0 0 1-7.846 1.103l1.923-.551a2 2 0 1 0 .363-1.804l-1.81-.904L16 8zM4 4v7h7V4h2v16h-2v-7H4v7H2V4z" />
    </svg>
  )
})
Icon.displayName = 'H5'
/**
 * Remix Icon: H 5
 * @see {@link https://remixicon.com/icon/h-5 Remix Icon Docs}
 */
export const H5 = Icon
