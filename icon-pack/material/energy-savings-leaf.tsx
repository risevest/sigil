import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 3C7.2 3 3 6.86 3 12C3 14.12 3.74 16.07 4.97 17.61L3 19.59L4.41 21L6.38 19.03C7.93 20.26 9.88 21 12 21C14.3 21 16.61 20.12 18.36 18.36C20.12 16.61 21 14.3 21 12V3H12ZM19 12C19 13.87 18.27 15.63 16.95 16.95C15.63 18.27 13.87 19 12 19C8.14 19 5 15.86 5 12C5 10.1 5.74 8.32 7.1 7.01C8.42 5.71 10.16 5 12 5H19V12Z" />
      <Path d="M8.46 12.63L12.51 13.03L10.07 16.36C9.96 16.52 9.97 16.74 10.11 16.88C10.26 17.03 10.51 17.04 10.67 16.89L15.83 12.26C16.16 11.96 15.98 11.41 15.53 11.37L11.48 10.97L13.92 7.64C14.03 7.48 14.02 7.26 13.88 7.12C13.73 6.97 13.48 6.96 13.32 7.11L8.16 11.74C7.84 12.04 8.02 12.59 8.46 12.63Z" />
    </Svg>
  )
}

Icon.displayName = 'EnergySavingsLeaf'

/**
 * Material Icon: Energy Savings Leaf
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:energy_savings_leaf Material Icon Docs}
 */
export const EnergySavingsLeaf = memo(Icon)
