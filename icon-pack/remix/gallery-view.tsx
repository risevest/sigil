import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM6 7H11V11H6V7ZM11 13H6V17H11V13ZM13 7H18V11H13V7ZM18 13H13V17H18V13Z" />
    </Svg>
  )
}

Icon.displayName = 'GalleryView'

/**
 * Remix Icon: Gallery View
 * @see {@link https://remixicon.com/icon/gallery-view Remix Icon Docs}
 */
export const GalleryView = memo(Icon)
