import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.4983 12C18.4983 8.11 19.3383 5.05 19.9283 3.31C20.1483 2.67 19.6683 2 18.9783 2H4.99829C4.31829 2 3.83829 2.66 4.04829 3.31C4.73829 5.36 5.49829 8.1 5.49829 12C5.49829 15.87 4.73829 18.66 4.04829 20.69C3.83829 21.34 4.31829 22 4.99829 22H18.9983C19.6783 22 20.1683 21.34 19.9483 20.69C19.2683 18.66 18.4983 15.86 18.4983 12Z" />
    </Svg>
  )
}

Icon.displayName = 'PanoramaVerticalSelect'

/**
 * Material Icon: Panorama Vertical Select
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:panorama_vertical_select Material Icon Docs}
 */
export const PanoramaVerticalSelect = memo(Icon)
