import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 7.5C19.5523 7.5 20 7.05228 20 6.5C20 5.94772 19.5523 5.5 19 5.5C18.4477 5.5 18 5.94772 18 6.5C18 7.05228 18.4477 7.5 19 7.5Z" />
      <Path d="M15 7.5C15.5523 7.5 16 7.05228 16 6.5C16 5.94772 15.5523 5.5 15 5.5C14.4477 5.5 14 5.94772 14 6.5C14 7.05228 14.4477 7.5 15 7.5Z" />
      <Path d="M16.99 9C15.61 9 14.49 9.84 14.49 10.88H19.49C19.49 9.84 18.37 9 16.99 9Z" />
      <Path d="M1 16C1 19.31 3.69 22 7 22C10.31 22 13 19.31 13 16V9H1V16ZM3 11H11V16C11 18.21 9.21 20 7 20C4.79 20 3 18.21 3 16V11Z" />
      <Path d="M11 2V7.5H13V4H21V9C21 11.21 19.21 13 17 13C16.05 13 15.19 12.65 14.5 12.1V14.45C15.26 14.8 16.11 15 17 15C20.31 15 23 12.31 23 9V2H11Z" />
      <Path d="M5 14.5C5.55228 14.5 6 14.0523 6 13.5C6 12.9477 5.55228 12.5 5 12.5C4.44772 12.5 4 12.9477 4 13.5C4 14.0523 4.44772 14.5 5 14.5Z" />
      <Path d="M9 14.5C9.55228 14.5 10 14.0523 10 13.5C10 12.9477 9.55228 12.5 9 12.5C8.44772 12.5 8 12.9477 8 13.5C8 14.0523 8.44772 14.5 9 14.5Z" />
      <Path d="M7 17.88C8.38 17.88 9.5 17.04 9.5 16H4.5C4.5 17.04 5.62 17.88 7 17.88Z" />
    </Svg>
  )
}

Icon.displayName = 'TheaterComedy'

/**
 * Material Icon: Theater Comedy
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:theater_comedy Material Icon Docs}
 */
export const TheaterComedy = memo(Icon)
