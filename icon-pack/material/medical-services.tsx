import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 6H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V8C22 6.9 21.1 6 20 6ZM10 4H14V6H10V4ZM20 20H4V8H20V20Z" />
      <Path d="M13 10H11V13H8V15H11V18H13V15H16V13H13V10Z" />
    </Svg>
  )
}

Icon.displayName = 'MedicalServices'

/**
 * Material Icon: Medical Services
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:medical_services Material Icon Docs}
 */
export const MedicalServices = memo(Icon)
