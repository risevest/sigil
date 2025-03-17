import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.5 14H8.5V16H3.5V8H5.5V14ZM8.5 10H10.5V16H12.5V10H14.5V8H8.5V10ZM20.5 10V8H15.5V16H20.5V14H17.5V13H20.5V11H17.5V10H20.5Z" />
    </Svg>
  )
}

Icon.displayName = 'LteMobiledata'

/**
 * Material Icon: Lte Mobiledata
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:lte_mobiledata Material Icon Docs}
 */
export const LteMobiledata = memo(Icon)
