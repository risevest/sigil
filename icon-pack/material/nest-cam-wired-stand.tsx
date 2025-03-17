import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.995 1.00014C15.845 1.00014 16.105 0.980139 11.715 1.42014C8.465 1.75014 5.995 4.48014 5.995 7.75014C5.995 11.0201 8.465 13.7501 11.715 14.0801L13.615 14.2701L13.055 15.1201C12.705 15.0401 12.355 15.0001 11.995 15.0001C9.235 15.0001 6.995 17.2401 6.995 20.0001V22.0001C6.995 22.5501 7.445 23.0001 7.995 23.0001H15.995C16.545 23.0001 16.995 22.5501 16.995 22.0001V20.0001C16.995 18.3301 16.165 16.8501 14.905 15.9401L15.875 14.4901C15.915 14.4901 15.965 14.5001 16.005 14.5001C17.095 14.5001 18.005 13.6101 18.005 12.5001V3.00014C17.995 1.89014 17.085 1.00014 15.995 1.00014ZM14.995 21.0001H8.995V20.0001C8.995 18.3501 10.345 17.0001 11.995 17.0001C13.645 17.0001 14.995 18.3501 14.995 20.0001V21.0001ZM7.995 7.75014C7.995 5.50014 9.685 3.64014 11.915 3.41014L15.995 3.00014L16.025 12.5001L11.915 12.0801C9.685 11.8601 7.995 10.0001 7.995 7.75014Z" />
    </Svg>
  )
}

Icon.displayName = 'NestCamWiredStand'

/**
 * Material Icon: Nest Cam Wired Stand
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:nest_cam_wired_stand Material Icon Docs}
 */
export const NestCamWiredStand = memo(Icon)
