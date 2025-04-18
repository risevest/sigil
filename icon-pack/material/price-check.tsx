import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.5 13V9C10.5 8.45 10.05 8 9.5 8H5.5V6H10.5V4H8V3H6V4H4.5C3.95 4 3.5 4.45 3.5 5V9C3.5 9.55 3.95 10 4.5 10H8.5V12H3.5V14H6V15H8V14H9.5C10.05 14 10.5 13.55 10.5 13Z" />
      <Path d="M19.09 12.52L13.43 18.17L10.6 15.34L9.19 16.76L13.43 21L20.5 13.93L19.09 12.52Z" />
    </Svg>
  )
}

Icon.displayName = 'PriceCheck'

/**
 * Material Icon: Price Check
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:price_check Material Icon Docs}
 */
export const PriceCheck = memo(Icon)
