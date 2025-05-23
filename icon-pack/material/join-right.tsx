import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 17.74C13.6569 17.74 15 15.1701 15 12C15 8.82989 13.6569 6.26 12 6.26C10.3431 6.26 9 8.82989 9 12C9 15.1701 10.3431 17.74 12 17.74Z" />
      <Path d="M16.5 12C16.5 12.97 16.27 16.16 13.47 18.5C14.25 18.81 15.1 19 16 19C19.86 19 23 15.86 23 12C23 8.14 19.86 5 16 5C15.1 5 14.25 5.19 13.47 5.5C16.27 7.84 16.5 11.03 16.5 12Z" />
      <Path d="M8 19C8.9 19 9.75 18.81 10.53 18.5C9.92 17.99 9.43 17.43 9.04 16.87C8.71 16.95 8.36 17 8 17C5.24 17 3 14.76 3 12C3 9.24 5.24 7 8 7C8.36 7 8.71 7.05 9.04 7.13C9.43 6.57 9.92 6.01 10.53 5.5C9.75 5.19 8.9 5 8 5C4.14 5 1 8.14 1 12C1 15.86 4.14 19 8 19Z" />
    </Svg>
  )
}

Icon.displayName = 'JoinRight'

/**
 * Material Icon: Join Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:join_right Material Icon Docs}
 */
export const JoinRight = memo(Icon)
