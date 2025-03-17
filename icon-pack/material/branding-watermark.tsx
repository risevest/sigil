import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19ZM11 12H20V18H11V12Z" />
    </Svg>
  )
}

Icon.displayName = 'BrandingWatermark'

/**
 * Material Icon: Branding Watermark
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:branding_watermark Material Icon Docs}
 */
export const BrandingWatermark = memo(Icon)
