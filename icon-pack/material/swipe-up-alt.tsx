import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 6.83L14.59 8.42L16 7L12 3L8 7L9.41 8.41L11 6.83V11.1C8.72 11.56 7 13.58 7 16C7 18.76 9.24 21 12 21C14.76 21 17 18.76 17 16C17 13.58 15.28 11.56 13 11.1V6.83ZM12 19C10.34 19 9 17.66 9 16C9 14.34 10.34 13 12 13C13.66 13 15 14.34 15 16C15 17.66 13.66 19 12 19Z" />
    </Svg>
  )
}

Icon.displayName = 'SwipeUpAlt'

/**
 * Material Icon: Swipe Up Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:swipe_up_alt Material Icon Docs}
 */
export const SwipeUpAlt = memo(Icon)
