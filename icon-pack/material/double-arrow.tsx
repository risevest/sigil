import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.25 5H10.75L15.75 12L10.75 19H15.25L20.25 12L15.25 5Z" />
      <Path d="M8.25 5H3.75L8.75 12L3.75 19H8.25L13.25 12L8.25 5Z" />
    </Svg>
  )
}

Icon.displayName = 'DoubleArrow'

/**
 * Material Icon: Double Arrow
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:double_arrow Material Icon Docs}
 */
export const DoubleArrow = memo(Icon)
