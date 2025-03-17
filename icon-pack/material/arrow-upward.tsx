import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 12L5.41 13.41L11 7.83V20H13V7.83L18.58 13.42L20 12L12 4L4 12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowUpward'

/**
 * Material Icon: Arrow Upward
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:arrow_upward Material Icon Docs}
 */
export const ArrowUpward = memo(Icon)
