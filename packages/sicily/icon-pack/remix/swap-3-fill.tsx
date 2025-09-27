import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 5.914 3.707 8.207 2.293 6.793 7 2.086l4.707 4.707-1.414 1.414L8 5.914V11H6zM12.5 7a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m9.207 10.207-1.414-1.414L18 18.086V13h-2v5.086l-2.293-2.293-1.414 1.414L17 21.914zM11 14a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z" />
    </svg>
  )
})
Icon.displayName = 'Swap3Fill'
/**
 * Remix Icon: Swap 3 Fill
 * @see {@link https://remixicon.com/icon/swap-3-fill Remix Icon Docs}
 */
export const Swap3Fill = Icon
