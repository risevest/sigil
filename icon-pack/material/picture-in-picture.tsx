import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 7.00977H11V13.0098H19V7.00977ZM17 11.0098H13V9.00977H17V11.0098ZM21 3.00977H3C1.9 3.00977 1 3.90977 1 5.00977V19.0098C1 20.1098 1.9 20.9898 3 20.9898H21C22.1 20.9898 23 20.1098 23 19.0098V5.00977C23 3.90977 22.1 3.00977 21 3.00977ZM21 19.0198H3V4.98977H21V19.0198Z" />
    </Svg>
  )
}

Icon.displayName = 'PictureInPicture'

/**
 * Material Icon: Picture In Picture
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:picture_in_picture Material Icon Docs}
 */
export const PictureInPicture = memo(Icon)
