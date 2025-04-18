import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.5 11C15.94 11 14.58 10.1 13.92 8.79L13.13 7.12C13.12 7.1 12.63 6 11.34 6C7.72 6 5 16.69 5 19H7.5L5.4 21.8L7 23L10 19H12V23H14V18.97L12 13L12.49 10.29C13.3 11.52 14.54 12.43 16 12.81V13.5H17V12.5C17 12.22 17.22 12 17.5 12C17.78 12 18 12.22 18 12.5V23H19V12.5C19 11.67 18.33 11 17.5 11Z" />
      <Path d="M10.6 2.91C10.54 3.1 10.5 3.29 10.5 3.5C10.5 4.6 11.4 5.5 12.5 5.5C13.6 5.5 14.5 4.6 14.5 3.5C14.5 2.4 13.6 1.5 12.5 1.5C12.29 1.5 12.1 1.54 11.91 1.6C11.76 1.25 11.41 1 11 1C10.45 1 10 1.45 10 2C10 2.41 10.25 2.76 10.6 2.91Z" />
    </Svg>
  )
}

Icon.displayName = 'ElderlyWoman'

/**
 * Material Icon: Elderly Woman
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:elderly_woman Material Icon Docs}
 */
export const ElderlyWoman = memo(Icon)
