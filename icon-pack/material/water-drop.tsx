import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.67 6.55 4 10.48 4 13.8C4 18.78 7.8 22 12 22C16.2 22 20 18.78 20 13.8C20 10.48 17.33 6.55 12 2ZM12 20C8.65 20 6 17.43 6 13.8C6 11.46 7.95 8.36 12 4.66C16.05 8.36 18 11.45 18 13.8C18 17.43 15.35 20 12 20ZM7.83 14C8.2 14 8.5 14.26 8.57 14.62C8.98 16.84 10.85 17.6 12.21 17.49C12.64 17.47 13 17.81 13 18.24C13 18.64 12.68 18.97 12.28 18.99C10.15 19.12 7.66 17.9 7.09 14.87C7.01 14.42 7.37 14 7.83 14Z" />
    </Svg>
  )
}

Icon.displayName = 'WaterDrop'

/**
 * Material Icon: Water Drop
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:water_drop Material Icon Docs}
 */
export const WaterDrop = memo(Icon)
