import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.5 12C15.5 10.9 14.6 10 13.5 10C12.4 10 11.5 10.9 11.5 12C11.5 13.1 12.4 14 13.5 14C14.6 14 15.5 13.1 15.5 12ZM13.5 3C8.53 3 4.5 7.03 4.5 12H1.5L5.5 16L9.5 12H6.5C6.5 8.13 9.63 5 13.5 5C17.37 5 20.5 8.13 20.5 12C20.5 15.87 17.37 19 13.5 19C11.99 19 10.59 18.51 9.44 17.7L8.02 19.14C9.54 20.3 11.44 21 13.5 21C18.47 21 22.5 16.97 22.5 12C22.5 7.03 18.47 3 13.5 3Z" />
    </Svg>
  )
}

Icon.displayName = 'SettingsBackupRestore'

/**
 * Material Icon: Settings Backup Restore
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:settings_backup_restore Material Icon Docs}
 */
export const SettingsBackupRestore = memo(Icon)
