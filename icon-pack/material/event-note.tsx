import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 4H18V2H16V4H8V2H6V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM5 8V6H19V8H5ZM7 12H17V14H7V12ZM7 16H14V18H7V16Z" />
    </Svg>
  )
}

Icon.displayName = 'EventNote'

/**
 * Material Icon: Event Note
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:event_note Material Icon Docs}
 */
export const EventNote = memo(Icon)
