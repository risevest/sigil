import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 17.74C13.6569 17.74 15 15.1701 15 12C15 8.82989 13.6569 6.26 12 6.26C10.3431 6.26 9 8.82989 9 12C9 15.1701 10.3431 17.74 12 17.74Z" />
      <Path d="M7.5 12C7.5 11.03 7.73 7.84 10.53 5.5C9.75 5.19 8.9 5 8 5C4.14 5 1 8.14 1 12C1 15.86 4.14 19 8 19C8.9 19 9.75 18.81 10.53 18.5C7.73 16.16 7.5 12.97 7.5 12Z" />
      <Path d="M16 5C15.1 5 14.25 5.19 13.47 5.5C14.08 6.01 14.57 6.57 14.96 7.13C15.29 7.05 15.64 7 16 7C18.76 7 21 9.24 21 12C21 14.76 18.76 17 16 17C15.64 17 15.29 16.95 14.96 16.87C14.57 17.43 14.08 17.99 13.47 18.5C14.25 18.81 15.1 19 16 19C19.86 19 23 15.86 23 12C23 8.14 19.86 5 16 5Z" />
    </Svg>
  )
}

Icon.displayName = 'JoinLeft'

/**
 * Material Icon: Join Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:join_left Material Icon Docs}
 */
export const JoinLeft = memo(Icon)
