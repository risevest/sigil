import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 11.5H17.5V10H16.5V11.5H15V12.5H16.5V14H17.5V12.5H19V19H5V5H19V11.5Z" />
      <Path d="M7.5 15H9V9H6V10.5H7.5V15Z" />
      <Path d="M12 12.75L13.75 15H15.5L13.25 12L15.5 9H13.75L12 11.25V9H10.5V15H12V12.75Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi1kPlus'

/**
 * Material Icon: 1k Plus
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:1k_plus Material Icon Docs}
 */
export const Mi1kPlus = memo(Icon)
