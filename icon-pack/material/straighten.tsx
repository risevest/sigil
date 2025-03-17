import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 6H3C1.9 6 1 6.9 1 8V16C1 17.1 1.9 18 3 18H21C22.1 18 23 17.1 23 16V8C23 6.9 22.1 6 21 6ZM21 16H3V8H5V12H7V8H9V12H11V8H13V12H15V8H17V12H19V8H21V16Z" />
    </Svg>
  )
}

Icon.displayName = 'Straighten'

/**
 * Material Icon: Straighten
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:straighten Material Icon Docs}
 */
export const Straighten = memo(Icon)
