import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 13V12C14 11.45 13.55 11 13 11H9C8.45 11 8 11.45 8 12V16C8 16.55 8.45 17 9 17H13C13.55 17 14 16.55 14 16V15L16 16.06V11.94L14 13ZM12 5.5L18 10V19H6V10L12 5.5ZM12 3L4 9V21H20V9L12 3Z" />
    </Svg>
  )
}

Icon.displayName = 'CameraIndoor'

/**
 * Material Icon: Camera Indoor
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:camera_indoor Material Icon Docs}
 */
export const CameraIndoor = memo(Icon)
