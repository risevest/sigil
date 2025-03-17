import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18ZM6 10H8V12H6V10ZM6 14H14V16H6V14ZM16 14H18V16H16V14ZM10 10H18V12H10V10Z" />
    </Svg>
  )
}

Icon.displayName = 'Subtitles'

/**
 * Material Icon: Subtitles
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:subtitles Material Icon Docs}
 */
export const Subtitles = memo(Icon)
