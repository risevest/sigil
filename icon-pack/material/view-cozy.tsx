import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.25 7.25H7.25V11.25H11.25V7.25Z" />
      <Path d="M16.75 7.25H12.75V11.25H16.75V7.25Z" />
      <Path d="M11.25 12.75H7.25V16.75H11.25V12.75Z" />
      <Path d="M16.75 12.75H12.75V16.75H16.75V12.75Z" />
      <Path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewCozy'

/**
 * Material Icon: View Cozy
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_cozy Material Icon Docs}
 */
export const ViewCozy = memo(Icon)
