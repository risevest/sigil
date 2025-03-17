import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.25 9.86L17.28 12L14.25 14.14V9.86ZM5.25 9.86L8.28 12L5.25 14.14V9.86ZM12.25 6V18L20.75 12L12.25 6ZM3.25 6V18L11.75 12L3.25 6Z" />
    </Svg>
  )
}

Icon.displayName = 'FastForward'

/**
 * Material Icon: Fast Forward
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fast_forward Material Icon Docs}
 */
export const FastForward = memo(Icon)
