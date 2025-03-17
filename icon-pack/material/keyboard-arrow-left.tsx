import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.705 16.59L11.125 12L15.705 7.41L14.295 6L8.29498 12L14.295 18L15.705 16.59Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardArrowLeft'

/**
 * Material Icon: Keyboard Arrow Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_arrow_left Material Icon Docs}
 */
export const KeyboardArrowLeft = memo(Icon)
