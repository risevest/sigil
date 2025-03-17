import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 6V20H6V22H20C21.1 22 22 21.1 22 20V6H20Z" />
      <Path d="M16 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H16C17.1 18 18 17.1 18 16V4C18 2.9 17.1 2 16 2ZM9 16H4V11H9V16ZM16 16H11V11H16V16ZM16 9H4V4H16V9Z" />
    </Svg>
  )
}

Icon.displayName = 'BackupTable'

/**
 * Material Icon: Backup Table
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:backup_table Material Icon Docs}
 */
export const BackupTable = memo(Icon)
