import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10h-2a8 8 0 1 1-1.865-5.135l-1.997 1.997A2.5 2.5 0 0 0 12 10.75v2.5a2.5 2.5 0 0 0 5 0v-2.5c0-.681-.273-1.3-.715-1.75H22V3l-2.447 2.446A9.98 9.98 0 0 0 12 2m3.5 8.75v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 1 1 2 0M10 8.5H8.5v7H10z" />
    </svg>
  )
})
Icon.displayName = 'Forward10Fill'
/**
 * Remix Icon: Forward 10 Fill
 * @see {@link https://remixicon.com/icon/forward-10-fill Remix Icon Docs}
 */
export const Forward10Fill = Icon
