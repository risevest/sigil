import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 5.29492C8.13 5.29492 5 8.42492 5 12.2949H7C7 9.53492 9.24 7.29492 12 7.29492C14.76 7.29492 17 9.53492 17 12.2949H19C19 8.42492 15.87 5.29492 12 5.29492ZM13 14.5849C13.88 14.1949 14.5 13.3249 14.5 12.2949C14.5 10.9149 13.38 9.79492 12 9.79492C10.62 9.79492 9.5 10.9149 9.5 12.2949C9.5 13.3149 10.12 14.1949 11 14.5849V17.8849L7.59 21.2949L9 22.7049L12 19.7049L15 22.7049L16.41 21.2949L13 17.8849V14.5849ZM12 1.29492C5.93 1.29492 1 6.22492 1 12.2949H3C3 7.32492 7.03 3.29492 12 3.29492C16.97 3.29492 21 7.32492 21 12.2949H23C23 6.22492 18.07 1.29492 12 1.29492Z" />
    </Svg>
  )
}

Icon.displayName = 'SettingsInputAntenna'

/**
 * Material Icon: Settings Input Antenna
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:settings_input_antenna Material Icon Docs}
 */
export const SettingsInputAntenna = memo(Icon)
