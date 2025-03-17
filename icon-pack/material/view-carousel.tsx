import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 7H6V17H2V7ZM7 19H17V5H7V19ZM9 7H15V17H9V7ZM18 7H22V17H18V7Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewCarousel'

/**
 * Material Icon: View Carousel
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_carousel Material Icon Docs}
 */
export const ViewCarousel = memo(Icon)
