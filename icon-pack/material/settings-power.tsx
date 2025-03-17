import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 23H9V21H7V23ZM11 23H13V21H11V23ZM13 1H11V11H13V1ZM16.56 3.44L15.11 4.89C16.84 5.94 18 7.83 18 10C18 13.31 15.31 16 12 16C8.69 16 6 13.31 6 10C6 7.83 7.16 5.94 8.88 4.88L7.44 3.44C5.36 4.88 4 7.28 4 10C4 14.42 7.58 18 12 18C16.42 18 20 14.42 20 10C20 7.28 18.64 4.88 16.56 3.44ZM15 23H17V21H15V23Z" />
    </Svg>
  )
}

Icon.displayName = 'SettingsPower'

/**
 * Material Icon: Settings Power
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:settings_power Material Icon Docs}
 */
export const SettingsPower = memo(Icon)
