import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 22H2V2H4V22ZM22 2H20V22H22V2ZM13.5 7H10.5V17H13.5V7Z" />
    </Svg>
  )
}

Icon.displayName = 'HorizontalDistribute'

/**
 * Material Icon: Horizontal Distribute
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:horizontal_distribute Material Icon Docs}
 */
export const HorizontalDistribute = memo(Icon)
