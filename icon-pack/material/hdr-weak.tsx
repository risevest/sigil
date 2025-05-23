import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 8C2.79 8 1 9.79 1 12C1 14.21 2.79 16 5 16C7.21 16 9 14.21 9 12C9 9.79 7.21 8 5 8ZM17 6C13.69 6 11 8.69 11 12C11 15.31 13.69 18 17 18C20.31 18 23 15.31 23 12C23 8.69 20.31 6 17 6ZM17 16C14.79 16 13 14.21 13 12C13 9.79 14.79 8 17 8C19.21 8 21 9.79 21 12C21 14.21 19.21 16 17 16Z" />
    </Svg>
  )
}

Icon.displayName = 'HdrWeak'

/**
 * Material Icon: Hdr Weak
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hdr_weak Material Icon Docs}
 */
export const HdrWeak = memo(Icon)
