import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 1v3H1v2h3v3h2V6h3V4H6V1zM3 20.007V11h2v8h8v-5c0-.55.45-1 1-1l5-.001V5h-8V3h9.007c.548 0 .993.456.993 1.002V15l-6 5.996L4.002 21A1 1 0 0 1 3 20.007m15.171-5.008L15 15v3.169z" />
    </Svg>
  )
})
Icon.displayName = 'StickyNoteAddLine'
/**
 * Remix Icon: Sticky Note Add Line
 * @see {@link https://remixicon.com/icon/sticky-note-add-line Remix Icon Docs}
 */
export const StickyNoteAddLine = Icon
