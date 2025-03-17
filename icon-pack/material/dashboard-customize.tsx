import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 11H11V3H3V11ZM5 5H9V9H5V5Z" />
      <Path d="M13 3V11H21V3H13ZM19 9H15V5H19V9Z" />
      <Path d="M3 21H11V13H3V21ZM5 15H9V19H5V15Z" />
      <Path d="M18 13H16V16H13V18H16V21H18V18H21V16H18V13Z" />
    </Svg>
  )
}

Icon.displayName = 'DashboardCustomize'

/**
 * Material Icon: Dashboard Customize
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:dashboard_customize Material Icon Docs}
 */
export const DashboardCustomize = memo(Icon)
