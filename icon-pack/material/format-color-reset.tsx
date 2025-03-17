import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 6.19516C13.53 8.19516 15.08 10.6252 15.71 12.4352L17.94 14.6652C17.97 14.3952 18 14.1152 18 13.8352C18 9.85516 12 3.03516 12 3.03516C12 3.03516 10.82 4.38516 9.5 6.22516L10.94 7.66516C11.28 7.15516 11.64 6.66516 12 6.19516ZM5.41 4.97516L4 6.38516L7.32 9.70516C6.55 11.1652 6 12.6252 6 13.8352C6 17.1452 8.69 19.8352 12 19.8352C13.52 19.8352 14.9 19.2652 15.95 18.3352L18.58 20.9652L20 19.5552L5.41 4.97516ZM12 17.8352C9.79 17.8352 8 16.0452 8 13.8352C8 13.1452 8.32 12.2152 8.81 11.1952L14.53 16.9152C13.83 17.4752 12.96 17.8352 12 17.8352Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatColorReset'

/**
 * Material Icon: Format Color Reset
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_color_reset Material Icon Docs}
 */
export const FormatColorReset = memo(Icon)
