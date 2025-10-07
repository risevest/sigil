import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m15 14-.117.007a1 1 0 0 0-.876.876L14 15v6H3.998A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V14zm6 2-5 4.997V16z" />
    </svg>
  )
})
Icon.displayName = 'StickyNoteFill'
/**
 * Remix Icon: Sticky Note Fill
 * @see {@link https://remixicon.com/icon/sticky-note-fill Remix Icon Docs}
 */
export const StickyNoteFill = Icon
