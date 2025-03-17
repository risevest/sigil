import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 4V6H18V18H15V20H20V4H15Z" />
      <Path d="M4 20H9V18H6V6H9V4H4V20Z" />
    </Svg>
  )
}

Icon.displayName = 'DataArray'

/**
 * Material Icon: Data Array
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:data_array Material Icon Docs}
 */
export const DataArray = memo(Icon)
