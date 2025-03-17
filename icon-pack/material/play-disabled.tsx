import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.165 12.9155L19.715 11.2955L8.715 4.29547V4.46547L17.165 12.9155Z" />
      <Path d="M3.525 2.10547L2.105 3.51547L8.715 10.1255V18.2955L13.705 15.1155L20.485 21.8955L21.895 20.4855L3.525 2.10547ZM10.715 14.6555V12.1255L12.265 13.6755L10.715 14.6555Z" />
    </Svg>
  )
}

Icon.displayName = 'PlayDisabled'

/**
 * Material Icon: Play Disabled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:play_disabled Material Icon Docs}
 */
export const PlayDisabled = memo(Icon)
