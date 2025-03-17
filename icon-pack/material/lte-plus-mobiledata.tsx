import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.5 14H5.5V16H0.5V8H2.5V14ZM4.5 10H6.5V16H8.5V10H10.5V8H4.5V10ZM11.5 16H16.5V14H13.5V13H16.5V11H13.5V10H16.5V8H11.5V16ZM23.5 11H21.5V9H19.5V11H17.5V13H19.5V15H21.5V13H23.5V11Z" />
    </Svg>
  )
}

Icon.displayName = 'LtePlusMobiledata'

/**
 * Material Icon: Lte Plus Mobiledata
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:lte_plus_mobiledata Material Icon Docs}
 */
export const LtePlusMobiledata = memo(Icon)
