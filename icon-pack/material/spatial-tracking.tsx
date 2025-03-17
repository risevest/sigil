import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.56006 14C11.7701 14 13.5601 12.21 13.5601 10C13.5601 7.79 11.7701 6 9.56006 6C7.35006 6 5.56006 7.79 5.56006 10C5.56006 12.21 7.35006 14 9.56006 14ZM9.56006 8C10.6601 8 11.5601 8.9 11.5601 10C11.5601 11.1 10.6601 12 9.56006 12C8.46006 12 7.56006 11.1 7.56006 10C7.56006 8.9 8.46006 8 9.56006 8Z" />
      <Path d="M15.9501 16.56C14.2701 15.7 12.0901 15 9.56006 15C7.03006 15 4.85006 15.7 3.17006 16.56C2.17006 17.07 1.56006 18.1 1.56006 19.22V22H17.5601V19.22C17.5601 18.1 16.9501 17.07 15.9501 16.56ZM15.5601 20H3.56006V19.22C3.56006 18.84 3.76006 18.5 4.08006 18.34C5.27006 17.73 7.19006 17 9.56006 17C11.9301 17 13.8501 17.73 15.0401 18.34C15.3601 18.5 15.5601 18.84 15.5601 19.22V20Z" />
      <Path d="M19.6101 3.41L18.2001 2C14.6901 5.51 14.6901 11.21 18.2001 14.73L19.6101 13.32C16.8801 10.58 16.8801 6.14 19.6101 3.41Z" />
      <Path d="M22.4401 6.24L21.0301 4.83C19.0801 6.78 19.0801 9.95 21.0301 11.9L22.4401 10.49C21.2701 9.32 21.2701 7.41 22.4401 6.24Z" />
    </Svg>
  )
}

Icon.displayName = 'SpatialTracking'

/**
 * Material Icon: Spatial Tracking
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:spatial_tracking Material Icon Docs}
 */
export const SpatialTracking = memo(Icon)
