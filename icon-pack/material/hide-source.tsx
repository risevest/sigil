import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.11495 2.50531L1.69495 3.91531L3.96495 6.18531C2.91495 7.76531 2.30495 9.65531 2.30495 11.6953C2.30495 17.2153 6.78495 21.6953 12.3049 21.6953C14.3449 21.6953 16.2349 21.0853 17.8149 20.0353L20.0849 22.3053L21.4949 20.8953L3.11495 2.50531ZM12.3049 19.6953C7.89495 19.6953 4.30495 16.1053 4.30495 11.6953C4.30495 10.2153 4.71495 8.83531 5.42495 7.63531L16.3649 18.5753C15.1649 19.2853 13.7849 19.6953 12.3049 19.6953ZM8.24495 4.81531L6.79495 3.35531C8.37495 2.30531 10.2649 1.69531 12.3049 1.69531C17.8249 1.69531 22.3049 6.17531 22.3049 11.6953C22.3049 13.7353 21.6949 15.6253 20.6449 17.2053L19.1849 15.7453C19.8949 14.5553 20.3049 13.1753 20.3049 11.6953C20.3049 7.28531 16.7149 3.69531 12.3049 3.69531C10.8249 3.69531 9.44495 4.10531 8.24495 4.81531Z" />
    </Svg>
  )
}

Icon.displayName = 'HideSource'

/**
 * Material Icon: Hide Source
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hide_source Material Icon Docs}
 */
export const HideSource = memo(Icon)
