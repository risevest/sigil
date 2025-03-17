import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 2V4H2V2H22ZM7 10.5V13.5H17V10.5H7ZM2 20V22H22V20H2Z" />
    </Svg>
  )
}

Icon.displayName = 'VerticalDistribute'

/**
 * Material Icon: Vertical Distribute
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:vertical_distribute Material Icon Docs}
 */
export const VerticalDistribute = memo(Icon)
