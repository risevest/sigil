import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.73 10.7705C16.73 10.8405 16.73 10.9005 16.73 10.9705C16.73 13.3105 14.78 16.4105 10.73 20.1105C6.67998 16.4105 4.72998 13.3205 4.72998 10.9705C4.72998 7.34047 7.37998 4.77047 10.73 4.77047C11.07 4.77047 11.41 4.80047 11.73 4.85047V2.83047C11.4 2.79047 11.07 2.77047 10.73 2.77047C6.52998 2.77047 2.72998 5.99047 2.72998 10.9705C2.72998 14.2905 5.39998 18.2205 10.73 22.7705C16.06 18.2205 18.73 14.2905 18.73 10.9705C18.73 10.9005 18.73 10.8405 18.73 10.7705H16.73Z" />
      <Path d="M10.73 12.7705C11.8345 12.7705 12.73 11.875 12.73 10.7705C12.73 9.6659 11.8345 8.77047 10.73 8.77047C9.62541 8.77047 8.72998 9.6659 8.72998 10.7705C8.72998 11.875 9.62541 12.7705 10.73 12.7705Z" />
      <Path d="M21.27 2.65047L19.85 1.23047L17.73 3.36047L15.61 1.23047L14.19 2.65047L16.32 4.77047L14.19 6.89047L15.61 8.31047L17.73 6.18047L19.85 8.31047L21.27 6.89047L19.14 4.77047L21.27 2.65047Z" />
    </Svg>
  )
}

Icon.displayName = 'WrongLocation'

/**
 * Material Icon: Wrong Location
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wrong_location Material Icon Docs}
 */
export const WrongLocation = memo(Icon)
