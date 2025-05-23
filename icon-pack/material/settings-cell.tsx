import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 22H9V24H7V22ZM11 22H13V24H11V22ZM15 22H17V24H15V22ZM16 0.01L8 0C6.9 0 6 0.9 6 2V18C6 19.1 6.9 20 8 20H16C17.1 20 18 19.1 18 18V2C18 0.9 17.1 0.01 16 0.01ZM16 18H8V17H16V18ZM16 15H8V5H16V15ZM16 3H8V2H16V3Z" />
    </Svg>
  )
}

Icon.displayName = 'SettingsCell'

/**
 * Material Icon: Settings Cell
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:settings_cell Material Icon Docs}
 */
export const SettingsCell = memo(Icon)
