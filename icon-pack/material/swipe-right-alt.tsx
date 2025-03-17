import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.9 11C12.44 8.72 10.42 7 8 7C5.24 7 3 9.24 3 12C3 14.76 5.24 17 8 17C10.42 17 12.44 15.28 12.9 13H17.17L15.58 14.59L17 16L21 12L17 8L15.59 9.41L17.17 11H12.9ZM8 9C9.66 9 11 10.34 11 12C11 13.66 9.66 15 8 15C6.34 15 5 13.66 5 12C5 10.34 6.34 9 8 9Z" />
    </Svg>
  )
}

Icon.displayName = 'SwipeRightAlt'

/**
 * Material Icon: Swipe Right Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:swipe_right_alt Material Icon Docs}
 */
export const SwipeRightAlt = memo(Icon)
