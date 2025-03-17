import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2.5C6.95 2.5 3.15 4.35 0 6.73L12 21.5L24 6.75C20.85 4.37 17.05 2.5 12 2.5ZM2.92 7.15C5.8 5.35 8.74 4.5 12 4.5C15.25 4.5 18.18 5.35 21.08 7.17L12 18.33L2.92 7.15ZM11 9.5H13V15.5H11V9.5ZM11 5.5H13V7.5H11V5.5Z" />
    </Svg>
  )
}

Icon.displayName = 'PermScanWifi'

/**
 * Material Icon: Perm Scan Wifi
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:perm_scan_wifi Material Icon Docs}
 */
export const PermScanWifi = memo(Icon)
