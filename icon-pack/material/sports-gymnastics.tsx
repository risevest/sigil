import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 5C4 3.9 4.9 3 6 3C7.1 3 8 3.9 8 5C8 6.1 7.1 7 6 7C4.9 7 4 6.1 4 5ZM1 8H7L14 3L15.31 4.52L11.14 7.5H14L21.8 3L23 4.4L14.5 11L14 21H12L11.5 11L8 10H1V8Z" />
    </Svg>
  )
}

Icon.displayName = 'SportsGymnastics'

/**
 * Material Icon: Sports Gymnastics
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sports_gymnastics Material Icon Docs}
 */
export const SportsGymnastics = memo(Icon)
