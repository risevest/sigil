import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 18L14.5 12L6 6V18ZM8 9.86L11.03 12L8 14.14V9.86ZM16 6H18V18H16V6Z" />
    </Svg>
  )
}

Icon.displayName = 'SkipNext'

/**
 * Material Icon: Skip Next
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:skip_next Material Icon Docs}
 */
export const SkipNext = memo(Icon)
