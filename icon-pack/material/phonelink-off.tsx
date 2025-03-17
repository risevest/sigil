import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 6.07008V4.07008H7.39L9.39 6.07008H22ZM24 19.0701V9.07008C24 8.52008 23.55 8.07008 23 8.07008H17C16.45 8.07008 16 8.52008 16 9.07008V12.6801L18 14.6801V10.0701H22V17.0701H20.39L23.32 20.0001C23.71 19.8701 24 19.5101 24 19.0701ZM2.06 1.58008L0.65 2.99008L2.47 4.81008C2.18 5.15008 2 5.59008 2 6.07008V17.0701H0V20.0701H17.73L20.08 22.4201L21.49 21.0101L2.06 1.58008ZM4 17.0701V6.34008L14.73 17.0701H4Z" />
    </Svg>
  )
}

Icon.displayName = 'PhonelinkOff'

/**
 * Material Icon: Phonelink Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:phonelink_off Material Icon Docs}
 */
export const PhonelinkOff = memo(Icon)
