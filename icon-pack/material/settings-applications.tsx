import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.21 13.97L7.41 16.04C7.49 16.17 7.64 16.22 7.78 16.17L9.27 15.57C9.58 15.81 9.91 16.01 10.28 16.16L10.5 17.75C10.53 17.89 10.65 18 10.8 18H13.2C13.35 18 13.47 17.89 13.5 17.74L13.72 16.15C14.08 16 14.42 15.8 14.73 15.56L16.22 16.16C16.36 16.21 16.51 16.16 16.59 16.03L17.79 13.96C17.87 13.83 17.83 13.67 17.72 13.57L16.45 12.58C16.48 12.39 16.49 12.19 16.49 12C16.49 11.8 16.47 11.61 16.45 11.41L17.72 10.42C17.83 10.33 17.87 10.16 17.79 10.03L16.59 7.96C16.51 7.83 16.36 7.78 16.22 7.83L14.73 8.43C14.42 8.19 14.09 7.99 13.72 7.84L13.5 6.25C13.47 6.11 13.35 6 13.2 6H10.8C10.65 6 10.53 6.11 10.5 6.26L10.28 7.85C9.92 8 9.57 8.19 9.27 8.43L7.78 7.83C7.64 7.78 7.49 7.83 7.41 7.96L6.21 10.03C6.13 10.16 6.17 10.32 6.28 10.42L7.55 11.41C7.52 11.61 7.5 11.8 7.5 12C7.5 12.2 7.52 12.39 7.54 12.59L6.27 13.58C6.16 13.68 6.13 13.84 6.21 13.97ZM12 10.29C12.94 10.29 13.71 11.06 13.71 12C13.71 12.94 12.94 13.71 12 13.71C11.06 13.71 10.29 12.94 10.29 12C10.29 11.06 11.06 10.29 12 10.29ZM19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM19 19H5V5H19V19Z" />
    </Svg>
  )
}

Icon.displayName = 'SettingsApplications'

/**
 * Material Icon: Settings Applications
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:settings_applications Material Icon Docs}
 */
export const SettingsApplications = memo(Icon)
