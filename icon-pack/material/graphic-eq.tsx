import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 18H9V6H7V18ZM11 22H13V2H11V22ZM3 14H5V10H3V14ZM15 18H17V6H15V18ZM19 10V14H21V10H19Z" />
    </Svg>
  )
}

Icon.displayName = 'GraphicEq'

/**
 * Material Icon: Graphic Eq
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:graphic_eq Material Icon Docs}
 */
export const GraphicEq = memo(Icon)
