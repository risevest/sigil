import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.6 18.2011L13 11.7511V10.8411C14.65 10.3511 15.8 8.67113 15.43 6.79113C15.17 5.48113 14.13 4.39113 12.82 4.09113C10.54 3.57113 8.50002 5.30113 8.50002 7.50113H10.5C10.5 6.67113 11.17 6.00113 12 6.00113C12.83 6.00113 13.5 6.67113 13.5 7.50113C13.5 8.34113 12.81 9.02113 11.97 9.00113C11.43 8.99113 11 9.45113 11 9.99113V11.7511L2.40002 18.2011C1.63002 18.7811 2.04002 20.0011 3.00002 20.0011H21C21.96 20.0011 22.37 18.7811 21.6 18.2011ZM6.00002 18.0011L12 13.5011L18 18.0011H6.00002Z" />
    </Svg>
  )
}

Icon.displayName = 'Checkroom'

/**
 * Material Icon: Checkroom
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:checkroom Material Icon Docs}
 */
export const Checkroom = memo(Icon)
