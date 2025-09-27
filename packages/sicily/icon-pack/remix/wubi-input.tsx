import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 21v-2h3.662l1.234-7H5v-2h3.249l.881-5H4V3h16v2h-8.839l-.882 5H18v9h3v2zm13-9H9.927l-1.235 7H16z" />
    </svg>
  )
})
Icon.displayName = 'WubiInput'
/**
 * Remix Icon: Wubi Input
 * @see {@link https://remixicon.com/icon/wubi-input Remix Icon Docs}
 */
export const WubiInput = Icon
