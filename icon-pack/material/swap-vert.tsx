import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 17.01V10H14V17.01H11L15 21L19 17.01H16ZM9 3L5 6.99H8V14H10V6.99H13L9 3ZM16 17.01V10H14V17.01H11L15 21L19 17.01H16ZM9 3L5 6.99H8V14H10V6.99H13L9 3Z" />
    </Svg>
  )
}

Icon.displayName = 'SwapVert'

/**
 * Material Icon: Swap Vert
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:swap_vert Material Icon Docs}
 */
export const SwapVert = memo(Icon)
