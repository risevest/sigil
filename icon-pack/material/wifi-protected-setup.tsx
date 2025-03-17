import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.7051 5.29L18.9951 3H10.9951V11L13.2951 8.7C15.2651 10.16 16.5451 12.48 16.5451 15.12C16.5451 16.43 16.2251 17.66 15.6651 18.75C17.9951 17.23 19.5451 14.61 19.5451 11.62C19.5451 9.1 18.4351 6.85 16.7051 5.29Z" />
      <Path d="M7.45508 8.88C7.45508 7.57 7.77508 6.34 8.33508 5.25C5.99508 6.77 4.45508 9.39 4.45508 12.38C4.45508 14.9 5.55508 17.15 7.29508 18.71L4.99508 21H12.9951V13L10.6951 15.3C8.73508 13.84 7.45508 11.52 7.45508 8.88Z" />
    </Svg>
  )
}

Icon.displayName = 'WifiProtectedSetup'

/**
 * Material Icon: Wifi Protected Setup
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wifi_protected_setup Material Icon Docs}
 */
export const WifiProtectedSetup = memo(Icon)
