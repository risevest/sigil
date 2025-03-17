import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.0181 14.5376L7.28807 1.80762L3.39807 5.69762L11.5281 17.3676C10.7481 18.1476 10.7481 19.4176 11.5281 20.1976L12.9381 21.6076C13.7181 22.3876 14.9881 22.3876 15.7681 21.6076L20.0081 17.3676C20.7981 16.5876 20.7981 15.3176 20.0181 14.5376ZM5.99807 5.92762L7.28807 4.63762L15.7781 13.1276L12.9681 15.9376L5.99807 5.92762ZM14.3581 20.1876L12.9481 18.7776L17.1881 14.5376L18.5981 15.9476L14.3581 20.1876Z" />
    </Svg>
  )
}

Icon.displayName = 'Carpenter'

/**
 * Material Icon: Carpenter
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:carpenter Material Icon Docs}
 */
export const Carpenter = memo(Icon)
