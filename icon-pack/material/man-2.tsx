import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 7H10C8.9 7 8 7.9 8 9V15H10.5V22H13.5V15H16V9C16 7.9 15.1 7 14 7Z" />
      <Path d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z" />
    </Svg>
  )
}

Icon.displayName = 'Man2'

/**
 * Material Icon: Man 2
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:man_2 Material Icon Docs}
 */
export const Man2 = memo(Icon)
