import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 5H23V19H21V5ZM17 5H19V19H17V5ZM14 5H2C1.45 5 1 5.45 1 6V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V6C15 5.45 14.55 5 14 5ZM13 17H3V7H13V17Z" />
      <Path d="M8 11.89C9.07696 11.89 9.95 11.017 9.95 9.94C9.95 8.86304 9.07696 7.99 8 7.99C6.92304 7.99 6.05 8.86304 6.05 9.94C6.05 11.017 6.92304 11.89 8 11.89Z" />
      <Path d="M11.89 15.35C11.89 14.05 9.3 13.4 8 13.4C6.7 13.4 4.11 14.05 4.11 15.35V16H11.89V15.35Z" />
    </Svg>
  )
}

Icon.displayName = 'RecentActors'

/**
 * Material Icon: Recent Actors
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:recent_actors Material Icon Docs}
 */
export const RecentActors = memo(Icon)
