import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.24495 4.81531C9.44495 4.10531 10.8249 3.69531 12.3049 3.69531C16.7149 3.69531 20.3049 7.28531 20.3049 11.6953C20.3049 13.1753 19.8949 14.5553 19.1849 15.7553L20.6449 17.2153C21.6949 15.6253 22.3049 13.7353 22.3049 11.6953C22.3049 6.17531 17.8249 1.69531 12.3049 1.69531C10.2649 1.69531 8.37495 2.30531 6.79495 3.35531L8.24495 4.81531Z" />
      <Path d="M3.11495 2.50531L1.69495 3.91531L3.96495 6.18531C2.91495 7.76531 2.30495 9.65531 2.30495 11.6953C2.30495 17.2153 6.78495 21.6953 12.3049 21.6953C14.3449 21.6953 16.2349 21.0853 17.8149 20.0353L20.0849 22.3053L21.4949 20.8953L3.11495 2.50531ZM12.3049 19.6953C7.89495 19.6953 4.30495 16.1053 4.30495 11.6953C4.30495 10.2153 4.71495 8.83531 5.42495 7.63531L8.47495 10.6953H7.30495V12.6953H10.4749L16.3549 18.5753C15.1649 19.2853 13.7849 19.6953 12.3049 19.6953Z" />
      <Path d="M14.1349 10.6953L16.1349 12.6953H17.3049V10.6953H14.1349Z" />
    </Svg>
  )
}

Icon.displayName = 'DoNotDisturbOff'

/**
 * Material Icon: Do Not Disturb Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:do_not_disturb_off Material Icon Docs}
 */
export const DoNotDisturbOff = memo(Icon)
