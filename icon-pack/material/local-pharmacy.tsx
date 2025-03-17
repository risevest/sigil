import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 6H18.36L19.5 2.86L17.15 2L15.69 6H3V8L5 14L3 20V22H21V20L19 14L21 8V6ZM18.89 20H5.11L7.11 14L5.11 8H18.89L16.89 14L18.89 20ZM13 10H11V13H8V15H11V18H13V15H16V13H13V10Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalPharmacy'

/**
 * Material Icon: Local Pharmacy
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_pharmacy Material Icon Docs}
 */
export const LocalPharmacy = memo(Icon)
