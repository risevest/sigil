import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20.77C21.45 20 22 19.44 22 18.77V8C22 6.9 21.1 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM18 12H6V10H18V12ZM14 16H6V14H14V16Z" />
    </Svg>
  )
}

Icon.displayName = 'Topic'

/**
 * Material Icon: Topic
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:topic Material Icon Docs}
 */
export const Topic = memo(Icon)
