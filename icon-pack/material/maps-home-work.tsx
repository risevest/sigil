import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 7H17V9H19V7Z" />
      <Path d="M19 11H17V13H19V11Z" />
      <Path d="M19 15H17V17H19V15Z" />
      <Path d="M1 11V21H7V16H9V21H15V11L8 6L1 11ZM13 19H11V14H5V19H3V12L8 8.5L13 12V19Z" />
      <Path d="M10 3V4.97L12 6.4V5H21V19H17V21H23V3H10Z" />
    </Svg>
  )
}

Icon.displayName = 'MapsHomeWork'

/**
 * Material Icon: Maps Home Work
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:maps_home_work Material Icon Docs}
 */
export const MapsHomeWork = memo(Icon)
