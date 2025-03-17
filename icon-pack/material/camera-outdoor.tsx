import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 13C18 12.45 17.55 12 17 12H13C12.45 12 12 12.45 12 13V17C12 17.55 12.45 18 13 18H17C17.55 18 18 17.55 18 17V16L20 17.06V12.94L18 14V13ZM12 3L4 9V21H20V19H6V10L12 5.5L18 10V11H20V9L12 3Z" />
    </Svg>
  )
}

Icon.displayName = 'CameraOutdoor'

/**
 * Material Icon: Camera Outdoor
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:camera_outdoor Material Icon Docs}
 */
export const CameraOutdoor = memo(Icon)
