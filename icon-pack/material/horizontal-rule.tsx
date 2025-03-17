import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 11H4V13H20V11Z" />
    </Svg>
  )
}

Icon.displayName = 'HorizontalRule'

/**
 * Material Icon: Horizontal Rule
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:horizontal_rule Material Icon Docs}
 */
export const HorizontalRule = memo(Icon)
