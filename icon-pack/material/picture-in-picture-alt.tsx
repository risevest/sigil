import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 11H11V17H19V11ZM17 15H13V13H17V15ZM21 3H3C1.9 3 1 3.88 1 4.98V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V4.98C23 3.88 22.1 3 21 3ZM21 19.02H3V4.97H21V19.02Z" />
    </Svg>
  )
}

Icon.displayName = 'PictureInPictureAlt'

/**
 * Material Icon: Picture In Picture Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:picture_in_picture_alt Material Icon Docs}
 */
export const PictureInPictureAlt = memo(Icon)
