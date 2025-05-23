import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.93 7.06969H17.93V3.06969H11.93V7.67969L13.93 9.67969V7.06969ZM11.93 10.5097L4.33999 2.92969L2.92999 4.33969L11.93 13.3397V13.6197C10.99 13.0797 9.82999 12.8697 8.59999 13.2997C7.25999 13.7797 6.22999 14.9697 5.98999 16.3697C5.52999 19.1097 7.84999 21.4497 10.58 21.0197C12.54 20.7097 13.93 18.9097 13.93 16.9197V15.3397L19.66 21.0697L21.07 19.6597L11.93 10.5097ZM9.92999 19.0697C8.82999 19.0697 7.92999 18.1697 7.92999 17.0697C7.92999 15.9697 8.82999 15.0697 9.92999 15.0697C11.03 15.0697 11.93 15.9697 11.93 17.0697C11.93 18.1697 11.03 19.0697 9.92999 19.0697Z" />
    </Svg>
  )
}

Icon.displayName = 'MusicOff'

/**
 * Material Icon: Music Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:music_off Material Icon Docs}
 */
export const MusicOff = memo(Icon)
