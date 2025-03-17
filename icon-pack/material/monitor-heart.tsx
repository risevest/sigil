import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 4H4C2.9 4 2 4.9 2 6V9H4V6H20V9H22V6C22 4.9 21.1 4 20 4Z" />
      <Path d="M20 18H4V15H2V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V15H20V18Z" />
      <Path d="M14.89 7.55C14.55 6.87 13.44 6.87 13.1 7.55L10 13.76L8.89 11.55C8.72 11.21 8.38 11 8 11H2V13H7.38L9.1 16.45C9.28 16.79 9.62 17 10 17C10.38 17 10.72 16.79 10.89 16.45L14 10.24L15.11 12.45C15.28 12.79 15.62 13 16 13H22V11H16.62L14.89 7.55Z" />
    </Svg>
  )
}

Icon.displayName = 'MonitorHeart'

/**
 * Material Icon: Monitor Heart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:monitor_heart Material Icon Docs}
 */
export const MonitorHeart = memo(Icon)
