import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 2C8.1 2 9 2.9 9 4C9 5.1 8.1 6 7 6C5.9 6 5 5.1 5 4C5 2.9 5.9 2 7 2ZM16 9.5C16 10.33 16.67 11 17.5 11C18.33 11 19 10.33 19 9.5C19 8.67 18.33 8 17.5 8C16.67 8 16 8.67 16 9.5ZM19 12H16.16C15.58 12.01 15.02 12.32 14.71 12.86L13.79 14.18L10.22 8C9.85 7.37 9.19 7.01 8.51 7H5.5C4.4 7 3.5 7.9 3.5 9V15H5V22H10V11.61L12.53 16H14.73L15.5 14.9V22H19.5V17H20.5V13.5C20.5 12.68 19.83 12 19 12Z" />
    </Svg>
  )
}

Icon.displayName = 'EscalatorWarning'

/**
 * Material Icon: Escalator Warning
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:escalator_warning Material Icon Docs}
 */
export const EscalatorWarning = memo(Icon)
