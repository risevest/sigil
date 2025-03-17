import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.29498 16.59L12.875 12L8.29498 7.41L9.70498 6L15.705 12L9.70498 18L8.29498 16.59Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardArrowRight'

/**
 * Material Icon: Keyboard Arrow Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_arrow_right Material Icon Docs}
 */
export const KeyboardArrowRight = memo(Icon)
