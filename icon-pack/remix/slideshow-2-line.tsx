import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 17V20H18V22H6V20H11V17H4C3.44772 17 3 16.5523 3 16V4H2V2H22V4H21V16C21 16.5523 20.5523 17 20 17H13ZM5 15H19V4H5V15ZM10 6L15 9.5L10 13V6Z" />
    </Svg>
  )
}

Icon.displayName = 'Slideshow2Line'

/**
 * Remix Icon: Slideshow 2 Line
 * @see {@link https://remixicon.com/icon/slideshow-2-line Remix Icon Docs}
 */
export const Slideshow2Line = memo(Icon)
