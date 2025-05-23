import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 5H13V19H11V5ZM5 12C6.1 12 7 11.1 7 10C7 8.9 6.1 8 5 8C3.9 8 3 8.9 3 10C3 11.1 3.9 12 5 12ZM7.78 13.58C6.93 13.21 5.99 13 5 13C4.01 13 3.07 13.21 2.22 13.58C1.48 13.9 1 14.62 1 15.43V16H9V15.43C9 14.62 8.52 13.9 7.78 13.58ZM19 12C20.1 12 21 11.1 21 10C21 8.9 20.1 8 19 8C17.9 8 17 8.9 17 10C17 11.1 17.9 12 19 12ZM21.78 13.58C20.93 13.21 19.99 13 19 13C18.01 13 17.07 13.21 16.22 13.58C15.48 13.9 15 14.62 15 15.43V16H23V15.43C23 14.62 22.52 13.9 21.78 13.58Z" />
    </Svg>
  )
}

Icon.displayName = 'SafetyDivider'

/**
 * Material Icon: Safety Divider
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:safety_divider Material Icon Docs}
 */
export const SafetyDivider = memo(Icon)
