import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 4C8.03 4 5.15 4.63 3 5C2.45 6.97 2 8.92 2 12C2 15.03 2.45 17.05 3 19C5.15 19.37 7.98 20 12 20C15.97 20 18.85 19.37 21 19C21.57 16.98 22 15.01 22 12C22 8.97 21.55 6.95 21 5C18.85 4.63 16.02 4 12 4Z" />
    </Svg>
  )
}

Icon.displayName = 'PanoramaWideAngleSelect'

/**
 * Material Icon: Panorama Wide Angle Select
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:panorama_wide_angle_select Material Icon Docs}
 */
export const PanoramaWideAngleSelect = memo(Icon)
