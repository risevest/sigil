import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22 19v2h-2v-2H4v2H2v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10.528A5.99 5.99 0 0 1 17 3c1.777 0 3.374.773 4.472 2H22a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1M11.341 7H3v10h18v-3.528A6 6 0 0 1 11.341 7M17 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8M5 13h2v2H5zm3 0h2v2H8z" />
    </svg>
  )
})
Icon.displayName = 'Projector2Line'
/**
 * Remix Icon: Projector 2 Line
 * @see {@link https://remixicon.com/icon/projector-2-line Remix Icon Docs}
 */
export const Projector2Line = Icon
