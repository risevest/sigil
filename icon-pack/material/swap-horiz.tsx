import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.99 11L3 15L6.99 19V16H14V14H6.99V11ZM21 9L17.01 5V8H10V10H17.01V13L21 9Z" />
    </Svg>
  )
}

Icon.displayName = 'SwapHoriz'

/**
 * Material Icon: Swap Horiz
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:swap_horiz Material Icon Docs}
 */
export const SwapHoriz = memo(Icon)
