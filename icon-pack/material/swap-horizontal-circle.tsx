import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 6.5V9H11V11H15V13.5L18.5 10L15 6.5ZM9 10.5L5.5 14L9 17.5V15H13V13H9V10.5Z" />
    </Svg>
  )
}

Icon.displayName = 'SwapHorizontalCircle'

/**
 * Material Icon: Swap Horizontal Circle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:swap_horizontal_circle Material Icon Docs}
 */
export const SwapHorizontalCircle = memo(Icon)
