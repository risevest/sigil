import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 4L2 10V20H14V10L8 4ZM12 18H9V15H7V18H4V10.83L8 6.83L12 10.83V18ZM9 13H7V11H9V13ZM18 20V8.35L13.65 4H10.82L16 9.18V20H18ZM22 20V6.69L19.31 4H16.48L20 7.52V20H22Z" />
    </Svg>
  )
}

Icon.displayName = 'HolidayVillage'

/**
 * Material Icon: Holiday Village
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:holiday_village Material Icon Docs}
 */
export const HolidayVillage = memo(Icon)
