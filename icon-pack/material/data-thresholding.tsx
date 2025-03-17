import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H17.27L19 17.27V19ZM19 16H18.15L15.15 19H13.53L16.53 16H14.41L11.41 19H9.8L12.8 16H10.68L7.68 19H5.84L8.84 16H6.72L5 17.72V5H19V16Z" />
      <Path d="M10.67 11L12.67 13L17.75 7.91L16.34 6.5L12.67 10.17L10.67 8.17L6.25 12.59L7.66 14L10.67 11Z" />
    </Svg>
  )
}

Icon.displayName = 'DataThresholding'

/**
 * Material Icon: Data Thresholding
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:data_thresholding Material Icon Docs}
 */
export const DataThresholding = memo(Icon)
