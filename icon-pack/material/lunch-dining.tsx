import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V16H2V19ZM4 18H20V19H4V18Z" />
      <Path d="M18.66 11.5C16.71 11.5 16.57 12.5 15.33 12.5C14.14 12.5 13.91 11.5 12 11.5C10.05 11.5 9.91 12.5 8.67 12.5C7.48 12.5 7.25 11.5 5.34 11.5C3.39 11.5 3.25 12.5 2.01 12.5V14.5C3.91 14.5 4.18 13.5 5.36 13.5C6.55 13.5 6.78 14.5 8.69 14.5C10.64 14.5 10.78 13.5 12.02 13.5C13.21 13.5 13.44 14.5 15.35 14.5C17.3 14.5 17.44 13.5 18.68 13.5C19.87 13.5 20.08 14.48 22 14.5L21.99 12.52C20.38 12.19 20.37 11.5 18.66 11.5Z" />
      <Path d="M22 9C22.02 5 17.72 3 12 3C6.29 3 2 5 2 9V10H22V9ZM4.18 8C5.01 5.81 8.61 5 12 5C15.31 5 17.93 5.73 19.19 6.99C19.49 7.3 19.71 7.63 19.84 8H4.18Z" />
    </Svg>
  )
}

Icon.displayName = 'LunchDining'

/**
 * Material Icon: Lunch Dining
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:lunch_dining Material Icon Docs}
 */
export const LunchDining = memo(Icon)
