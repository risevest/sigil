import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.1 13C11.56 15.28 13.58 17 16 17C18.76 17 21 14.76 21 12C21 9.24 18.76 7 16 7C13.58 7 11.56 8.72 11.1 11H6.83L8.42 9.41L7 8L3 12L7 16L8.41 14.59L6.83 13H11.1ZM16 15C14.34 15 13 13.66 13 12C13 10.34 14.34 9 16 9C17.66 9 19 10.34 19 12C19 13.66 17.66 15 16 15Z" />
    </Svg>
  )
}

Icon.displayName = 'SwipeLeftAlt'

/**
 * Material Icon: Swipe Left Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:swipe_left_alt Material Icon Docs}
 */
export const SwipeLeftAlt = memo(Icon)
