import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.3 13.2L15.5 16H13.5L12.37 13.33H10.5V16H8.5V8H13.5C14.63 8 15.5 8.87 15.5 10V11.33C15.5 12.13 14.97 12.87 14.3 13.2ZM13.5 10H10.5V11.33H13.5V10Z" />
    </Svg>
  )
}

Icon.displayName = 'RMobiledata'

/**
 * Material Icon: R Mobiledata
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:r_mobiledata Material Icon Docs}
 */
export const RMobiledata = memo(Icon)
