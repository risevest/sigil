import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 5.31V19.5C8.69 19.5 6 16.87 6 13.63C6 12.07 6.62 10.6 7.75 9.49L12 5.31ZM12 2.5L6.35 8.06C4.9 9.49 4 11.46 4 13.63C4 17.98 7.58 21.5 12 21.5C16.42 21.5 20 17.98 20 13.63C20 11.46 19.1 9.49 17.65 8.06L12 2.5Z" />
    </Svg>
  )
}

Icon.displayName = 'InvertColors'

/**
 * Material Icon: Invert Colors
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:invert_colors Material Icon Docs}
 */
export const InvertColors = memo(Icon)
