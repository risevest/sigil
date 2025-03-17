import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.5 7H8.5V17H6.5V9H4.5V7ZM16.33 11.72L19.16 7H16.83L15.17 9.77L13.5 7H11.17L14 11.72L10.83 17H13.16L15.16 13.66L17.16 17H19.5L16.33 11.72Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi1xMobiledata'

/**
 * Material Icon: 1x Mobiledata
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:1x_mobiledata Material Icon Docs}
 */
export const Mi1xMobiledata = memo(Icon)
