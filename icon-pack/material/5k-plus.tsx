import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 11.5H17.5V10H16.5V11.5H15V12.5H16.5V14H17.5V12.5H19V19H5V5H19V11.5Z" />
      <Path d="M10 14V12.5C10 11.95 9.55 11.5 9 11.5H7.5V10.5H10V9H6V12.5H8.5V13.5H6V15H9C9.55 15 10 14.55 10 14Z" />
      <Path d="M12.5 12.75L14.25 15H16L13.75 12L16 9H14.25L12.5 11.25V9H11V15H12.5V12.75Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi5kPlus'

/**
 * Material Icon: 5k Plus
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:5k_plus Material Icon Docs}
 */
export const Mi5kPlus = memo(Icon)
