import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
      <Path d="M8.5 15H10V9H7V10.5H8.5V15Z" />
      <Path d="M13.5 12.75L15.25 15H17L14.75 12L17 9H15.25L13.5 11.25V9H12V15H13.5V12.75Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi1k'

/**
 * Material Icon: 1k
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:1k Material Icon Docs}
 */
export const Mi1k = memo(Icon)
