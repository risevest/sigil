import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 11H5V7H3V17H5V13H11V17H13V7H11V11ZM21 11H19V9H17V11H15V13H17V15H19V13H21V11Z" />
    </Svg>
  )
}

Icon.displayName = 'HPlusMobiledata'

/**
 * Material Icon: H Plus Mobiledata
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:h_plus_mobiledata Material Icon Docs}
 */
export const HPlusMobiledata = memo(Icon)
