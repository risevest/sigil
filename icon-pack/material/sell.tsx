import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.4081 11.4129L12.5781 2.58293C12.2081 2.21293 11.6981 2.00293 11.1681 2.00293H3.99811C2.89811 2.00293 1.99811 2.90293 1.99811 4.00293V11.1729C1.99811 11.7029 2.20811 12.2129 2.58811 12.5829L11.4181 21.4129C12.1981 22.1929 13.4681 22.1929 14.2481 21.4129L21.4181 14.2429C22.1981 13.4629 22.1981 12.2029 21.4081 11.4129ZM12.8281 20.0029L3.99811 11.1729V4.00293H11.1681L19.9981 12.8329L12.8281 20.0029Z" />
      <Path d="M6.49811 8.00293C7.32654 8.00293 7.99811 7.33136 7.99811 6.50293C7.99811 5.6745 7.32654 5.00293 6.49811 5.00293C5.66968 5.00293 4.99811 5.6745 4.99811 6.50293C4.99811 7.33136 5.66968 8.00293 6.49811 8.00293Z" />
    </Svg>
  )
}

Icon.displayName = 'Sell'

/**
 * Material Icon: Sell
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sell Material Icon Docs}
 */
export const Sell = memo(Icon)
