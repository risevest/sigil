import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 16V14L13.5 9V3.5C13.5 2.67 12.83 2 12 2C11.17 2 10.5 2.67 10.5 3.5V9L2 14V16L10.5 13.5V19L8 20.5V22L12 21L16 22V20.5L13.5 19V13.5L22 16Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalAirport'

/**
 * Material Icon: Local Airport
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_airport Material Icon Docs}
 */
export const LocalAirport = memo(Icon)
