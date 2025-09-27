import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M16 20.335v-2.2a7.52 7.52 0 0 0 3.623-4.281 9 9 0 0 1-10.622-8.99A7.52 7.52 0 0 0 5.151 10H3.117a9.505 9.505 0 0 1 8.538-7.963 7 7 0 0 0 10.316 8.728q.027.364.028.735c0 4.01-2.485 7.44-6 8.834M7 20h7v2H7zm-3-8h6v2H4zm-2 4h10v2H2z" />
    </svg>
  )
})
Icon.displayName = 'MoonFoggyLine'
/**
 * Remix Icon: Moon Foggy Line
 * @see {@link https://remixicon.com/icon/moon-foggy-line Remix Icon Docs}
 */
export const MoonFoggyLine = Icon
