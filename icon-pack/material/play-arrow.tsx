import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.5 8.64L13.77 12L8.5 15.36V8.64ZM6.5 5V19L17.5 12L6.5 5Z" />
    </Svg>
  )
}

Icon.displayName = 'PlayArrow'

/**
 * Material Icon: Play Arrow
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:play_arrow Material Icon Docs}
 */
export const PlayArrow = memo(Icon)
