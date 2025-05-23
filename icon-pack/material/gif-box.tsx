import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 19H5V5H19V19ZM5 3C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5ZM11.5 14H12.5V10H11.5V14ZM13.5 14H14.5V12.5H16V11.5H14.5V11H16.5V10H13.5V14ZM9.5 12V13H8.5V11H10.5C10.5 10.45 10.05 10 9.5 10H8.5C7.95 10 7.5 10.45 7.5 11V13C7.5 13.55 7.95 14 8.5 14H9.5C10.05 14 10.5 13.55 10.5 13V12H9.5Z" />
    </Svg>
  )
}

Icon.displayName = 'GifBox'

/**
 * Material Icon: Gif Box
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:gif_box Material Icon Docs}
 */
export const GifBox = memo(Icon)
