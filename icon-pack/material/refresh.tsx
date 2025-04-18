import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.645 6.35C16.195 4.9 14.205 4 11.995 4C7.575 4 4.005 7.58 4.005 12C4.005 16.42 7.575 20 11.995 20C15.725 20 18.835 17.45 19.725 14H17.645C16.825 16.33 14.605 18 11.995 18C8.685 18 5.995 15.31 5.995 12C5.995 8.69 8.685 6 11.995 6C13.655 6 15.135 6.69 16.215 7.78L12.995 11H19.995V4L17.645 6.35Z" />
    </Svg>
  )
}

Icon.displayName = 'Refresh'

/**
 * Material Icon: Refresh
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:refresh Material Icon Docs}
 */
export const Refresh = memo(Icon)
