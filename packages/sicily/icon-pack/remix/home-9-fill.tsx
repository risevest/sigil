import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12.581 2.686a1 1 0 0 0-1.162 0l-9.5 6.786 1.162 1.627L12 4.73l8.919 6.37 1.162-1.627zm7 10-7-5a1 1 0 0 0-1.162 0l-7 5a1 1 0 0 0-.42.814V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6.5a1 1 0 0 0-.418-.814" />
    </svg>
  )
})
Icon.displayName = 'Home9Fill'
/**
 * Remix Icon: Home 9 Fill
 * @see {@link https://remixicon.com/icon/home-9-fill Remix Icon Docs}
 */
export const Home9Fill = Icon
