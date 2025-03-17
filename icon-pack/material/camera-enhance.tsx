import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 10L11.06 12.06L9 13L11.06 13.94L12 16L12.94 13.94L15 13L12.94 12.06L12 10ZM20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H4V7H8.05L8.64 6.35L9.88 5H14.12L15.36 6.35L15.95 7H20V19ZM12 8C9.24 8 7 10.24 7 13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13C17 10.24 14.76 8 12 8ZM12 16C10.35 16 9 14.65 9 13C9 11.35 10.35 10 12 10C13.65 10 15 11.35 15 13C15 14.65 13.65 16 12 16Z" />
    </Svg>
  )
}

Icon.displayName = 'CameraEnhance'

/**
 * Material Icon: Camera Enhance
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:camera_enhance Material Icon Docs}
 */
export const CameraEnhance = memo(Icon)
