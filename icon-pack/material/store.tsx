import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.36 9L18.96 12H5.04L5.64 9H18.36ZM20 4H4V6H20V4ZM20 7H4L3 12V14H4V20H14V14H18V20H20V14H21V12L20 7ZM6 18V14H12V18H6Z" />
    </Svg>
  )
}

Icon.displayName = 'Store'

/**
 * Material Icon: Store
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:store Material Icon Docs}
 */
export const Store = memo(Icon)
