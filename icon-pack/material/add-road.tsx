import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.5 16.5V13.5H16.5V16.5H13.5V18.5H16.5V21.5H18.5V18.5H21.5V16.5H18.5Z" />
      <Path d="M18.5 2.5H16.5V11.5H18.5V2.5Z" />
      <Path d="M4.5 2.5H2.5V18.5H4.5V2.5Z" />
      <Path d="M11.5 2.5H9.5V6.5H11.5V2.5Z" />
      <Path d="M11.5 8.5H9.5V12.5H11.5V8.5Z" />
      <Path d="M11.5 14.5H9.5V18.5H11.5V14.5Z" />
    </Svg>
  )
}

Icon.displayName = 'AddRoad'

/**
 * Material Icon: Add Road
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_road Material Icon Docs}
 */
export const AddRoad = memo(Icon)
