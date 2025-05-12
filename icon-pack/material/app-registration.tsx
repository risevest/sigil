import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path d="M13.5 4H9.5V8H13.5V4Z" fill={color} />
      <Path d="M7.5 16H3.5V20H7.5V16Z" fill={color} />
      <Path d="M7.5 10H3.5V14H7.5V10Z" fill={color} />
      <Path d="M7.5 4H3.5V8H7.5V4Z" fill={color} />
      <Path d="M19.5 4H15.5V8H19.5V4Z" fill={color} />
      <Path d="M10.5 17.86V20H12.6L18.58 14.03L16.46 11.91L10.5 17.86Z" fill={color} />
      <Path d="M13.5 12.03V10H9.5V14H11.53L13.5 12.03Z" fill={color} />
      <Path
        d="M20.35 11.56L18.94 10.15C18.74 9.95 18.43 9.95 18.23 10.15L17.17 11.21L19.29 13.33L20.35 12.27C20.55 12.07 20.55 11.76 20.35 11.56Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'AppRegistration'

/**
 * Material Icon: App Registration
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:app_registration Material Icon Docs}
 */
export const AppRegistration = memo(Icon)
