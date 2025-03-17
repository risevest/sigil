import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 4V8L8 4H4ZM16 4L20 8V4H16ZM20 20V16L16 20H20ZM4 20H8L4 16V20ZM19 12C19 8.13 15.87 5 12 5C8.13 5 5 8.13 5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" />
    </Svg>
  )
}

Icon.displayName = 'AllOut'

/**
 * Material Icon: All Out
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:all_out Material Icon Docs}
 */
export const AllOut = memo(Icon)
