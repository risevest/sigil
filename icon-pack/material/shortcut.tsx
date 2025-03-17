import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 5L13.59 6.41L15 7.83L17.17 10H8C5.24 10 3 12.24 3 15V19H5V15C5 13.35 6.35 12 8 12H17.17L13.59 15.58L15 17L21 11L15 5Z" />
    </Svg>
  )
}

Icon.displayName = 'Shortcut'

/**
 * Material Icon: Shortcut
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:shortcut Material Icon Docs}
 */
export const Shortcut = memo(Icon)
