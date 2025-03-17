import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 5.50032C8.11 5.50032 5.05 4.66032 3.31 4.07032C2.67 3.85032 2 4.33032 2 5.02032V19.0003C2 19.6803 2.66 20.1703 3.31 19.9503C5.36 19.2603 8.1 18.5003 12 18.5003C15.87 18.5003 18.66 19.2603 20.69 19.9503C21.34 20.1603 22 19.6803 22 19.0003V5.00032C22 4.32032 21.34 3.83032 20.69 4.05032C18.66 4.73032 15.86 5.50032 12 5.50032Z" />
    </Svg>
  )
}

Icon.displayName = 'PanoramaHorizontalSelect'

/**
 * Material Icon: Panorama Horizontal Select
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:panorama_horizontal_select Material Icon Docs}
 */
export const PanoramaHorizontalSelect = memo(Icon)
