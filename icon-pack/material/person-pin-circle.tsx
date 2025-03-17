import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 11C13.33 11 16 11.67 16 13V13.16C15.03 14.28 13.6 15 12 15C10.4 15 8.97 14.28 8 13.16V13C8 11.67 10.67 11 12 11ZM12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10ZM18 10.2C18 6.57 15.35 4 12 4C8.65 4 6 6.57 6 10.2C6 12.54 7.95 15.64 12 19.34C16.05 15.64 18 12.54 18 10.2ZM12 2C16.2 2 20 5.22 20 10.2C20 13.52 17.33 17.45 12 22C6.67 17.45 4 13.52 4 10.2C4 5.22 7.8 2 12 2Z" />
    </Svg>
  )
}

Icon.displayName = 'PersonPinCircle'

/**
 * Material Icon: Person Pin Circle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:person_pin_circle Material Icon Docs}
 */
export const PersonPinCircle = memo(Icon)
