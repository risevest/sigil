import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 10C17.9 10 17 10.9 17 12H16V3L3 8V21H21V12C21 10.9 20.1 10 19 10ZM5 9.37L14 5.91V12H9V19H5V9.37ZM19 19H16V16H14V19H11V14H19V19Z" />
    </Svg>
  )
}

Icon.displayName = 'Villa'

/**
 * Material Icon: Villa
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:villa Material Icon Docs}
 */
export const Villa = memo(Icon)
