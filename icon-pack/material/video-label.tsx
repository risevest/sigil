import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 16H3V5H21V16Z" />
    </Svg>
  )
}

Icon.displayName = 'VideoLabel'

/**
 * Material Icon: Video Label
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:video_label Material Icon Docs}
 */
export const VideoLabel = memo(Icon)
