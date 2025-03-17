import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3.01 3.9 3.01 5L3 19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM10.5 17H13.5V13.5H17V10.5H13.5V7H10.5V10.5H7V13.5H10.5V17Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalHospital'

/**
 * Material Icon: Local Hospital
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_hospital Material Icon Docs}
 */
export const LocalHospital = memo(Icon)
