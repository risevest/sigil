import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M0 15H2V9H0V15ZM3 17H5V7H3V17ZM22 9V15H24V9H22ZM19 17H21V7H19V17ZM16.5 3H7.5C6.67 3 6 3.67 6 4.5V19.5C6 20.33 6.67 21 7.5 21H16.5C17.33 21 18 20.33 18 19.5V4.5C18 3.67 17.33 3 16.5 3ZM16 19H8V5H16V19Z" />
    </Svg>
  )
}

Icon.displayName = 'Vibration'

/**
 * Material Icon: Vibration
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:vibration Material Icon Docs}
 */
export const Vibration = memo(Icon)
