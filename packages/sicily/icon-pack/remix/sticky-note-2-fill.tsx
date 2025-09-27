import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m21 16-5.003 5H3.998A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999z" />
    </svg>
  )
})
Icon.displayName = 'StickyNote2Fill'
/**
 * Remix Icon: Sticky Note 2 Fill
 * @see {@link https://remixicon.com/icon/sticky-note-2-fill Remix Icon Docs}
 */
export const StickyNote2Fill = Icon
