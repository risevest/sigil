import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 12C17 9.24 14.76 7 12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12ZM12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15ZM5 15H3V19C3 20.1 3.9 21 5 21H9V19H5V15ZM5 5H9V3H5C3.9 3 3 3.9 3 5V9H5V5ZM19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3ZM19 19H15V21H19C20.1 21 21 20.1 21 19V15H19V19Z" />
    </Svg>
  )
}

Icon.displayName = 'CenterFocusStrong'

/**
 * Material Icon: Center Focus Strong
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:center_focus_strong Material Icon Docs}
 */
export const CenterFocusStrong = memo(Icon)
