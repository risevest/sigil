import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 12L18.59 10.59L13 16.17V4H11V16.17L5.42 10.58L4 12L12 20L20 12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDownward'

/**
 * Material Icon: Arrow Downward
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:arrow_downward Material Icon Docs}
 */
export const ArrowDownward = memo(Icon)
