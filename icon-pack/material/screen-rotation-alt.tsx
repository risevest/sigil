import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 7.58988L9 2.58988C9.78 1.80988 11.05 1.80988 11.83 2.58988L20.24 10.9999H17.41L10.4 3.99988L5.41 8.99988H8V10.9999H2V4.99988H4V7.58988ZM20 18.9999H22V12.9999H16V14.9999H18.59L13.6 19.9999L6.59 12.9999H3.76L12.17 21.4099C12.95 22.1899 14.22 22.1899 15 21.4099L20 16.4099V18.9999Z" />
    </Svg>
  )
}

Icon.displayName = 'ScreenRotationAlt'

/**
 * Material Icon: Screen Rotation Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:screen_rotation_alt Material Icon Docs}
 */
export const ScreenRotationAlt = memo(Icon)
