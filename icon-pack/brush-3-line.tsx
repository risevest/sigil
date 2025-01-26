import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 19.9967V14.9967H10V19.9967H19V12.9967H5V19.9967H8ZM4 10.9967H20V7.9967H14V3.9967H10V7.9967H4V10.9967ZM3 20.9967V12.9967H2V6.9967C2 6.44442 2.44772 5.9967 3 5.9967H8V2.9967C8 2.44442 8.44772 1.9967 9 1.9967H15C15.5523 1.9967 16 2.44442 16 2.9967V5.9967H21C21.5523 5.9967 22 6.44442 22 6.9967V12.9967H21V20.9967C21 21.549 20.5523 21.9967 20 21.9967H4C3.44772 21.9967 3 21.549 3 20.9967Z" />
    </Svg>
  )
}

Icon.displayName = 'Brush3Line'

/**
 * Remix Icon: Brush 3 Line
 * @see {@link https://remixicon.com/icon/brush-3-line Remix Icon Docs}
 */
export const Brush3Line = memo(Icon)
