import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.17 15.5H14.81L15.95 18.5H18.04L12.93 5.5H11.07L5.96 18.5H8.05L9.17 15.5ZM12 7.98L14.07 13.5H9.93L12 7.98ZM20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM20 20H4V4H20V20Z" />
    </Svg>
  )
}

Icon.displayName = 'FontDownload'

/**
 * Material Icon: Font Download
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:font_download Material Icon Docs}
 */
export const FontDownload = memo(Icon)
