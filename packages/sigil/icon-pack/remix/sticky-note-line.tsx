import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m21 15-6 5.996L4.002 21A1 1 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.456.993 1.002zM19 5H5v14h8v-5a1 1 0 0 1 .883-.993L14 13l5-.001zm-.829 9.999L15 15v3.169z" />
    </Svg>
  )
})
Icon.displayName = 'StickyNoteLine'
/**
 * Remix Icon: Sticky Note Line
 * @see {@link https://remixicon.com/icon/sticky-note-line Remix Icon Docs}
 */
export const StickyNoteLine = Icon
