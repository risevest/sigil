import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 9V3H7V5.59L3.91 2.5L2.5 3.91L5.59 7H3V9H9ZM21 9V7H18.41L21.5 3.91L20.09 2.5L17 5.59V3H15V9H21ZM3 15V17H5.59L2.5 20.09L3.91 21.5L7 18.41V21H9V15H3ZM15 15V21H17V18.41L20.09 21.5L21.5 20.09L18.41 17H21V15H15Z" />
    </Svg>
  )
}

Icon.displayName = 'ZoomInMap'

/**
 * Material Icon: Zoom In Map
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:zoom_in_map Material Icon Docs}
 */
export const ZoomInMap = memo(Icon)
