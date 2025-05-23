import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.33999 2.93457L2.92999 4.34457L7.28999 8.70457L6.99999 9.00457H2.99999V15.0046H6.99999L12 20.0046V13.4146L16.18 17.5946C15.53 18.0846 14.8 18.4746 14 18.7046V20.7646C15.34 20.4646 16.57 19.8446 17.61 19.0146L19.66 21.0646L21.07 19.6546L4.33999 2.93457ZM9.99999 15.1746L7.82999 13.0046H4.99999V11.0046H7.82999L8.70999 10.1246L9.99999 11.4146V15.1746ZM19 12.0046C19 12.8246 18.85 13.6146 18.59 14.3446L20.12 15.8746C20.68 14.7046 21 13.3946 21 12.0046C21 7.72457 18.01 4.14457 14 3.23457V5.29457C16.89 6.15457 19 8.83457 19 12.0046ZM12 4.00457L10.12 5.88457L12 7.76457V4.00457ZM16.5 12.0046C16.5 10.2346 15.48 8.71457 14 7.97457V9.76457L16.48 12.2446C16.49 12.1646 16.5 12.0846 16.5 12.0046Z" />
    </Svg>
  )
}

Icon.displayName = 'VolumeOff'

/**
 * Material Icon: Volume Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:volume_off Material Icon Docs}
 */
export const VolumeOff = memo(Icon)
