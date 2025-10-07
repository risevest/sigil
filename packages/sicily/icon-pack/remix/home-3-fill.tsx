import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3zM8 15v2h8v-2z" />
    </svg>
  )
})
Icon.displayName = 'Home3Fill'
/**
 * Remix Icon: Home 3 Fill
 * @see {@link https://remixicon.com/icon/home-3-fill Remix Icon Docs}
 */
export const Home3Fill = Icon
