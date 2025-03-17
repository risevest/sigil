import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 8H6V15C6 16.1 6.9 17 8 17H17V15H8V8Z" />
      <Path d="M20 3H12C10.9 3 10 3.9 10 5V11C10 12.1 10.9 13 12 13H20C21.1 13 22 12.1 22 11V5C22 3.9 21.1 3 20 3ZM20 11H12V7H20V11Z" />
      <Path d="M4 12H2V19C2 20.1 2.9 21 4 21H13V19H4V12Z" />
    </Svg>
  )
}

Icon.displayName = 'DynamicFeed'

/**
 * Material Icon: Dynamic Feed
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:dynamic_feed Material Icon Docs}
 */
export const DynamicFeed = memo(Icon)
