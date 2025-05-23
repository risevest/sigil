import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 4V16H8V4H20ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM12.47 14L9 10.5L10.4 9.09L12.47 11.17L17.6 6L19 7.41L12.47 14ZM4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6Z" />
    </Svg>
  )
}

Icon.displayName = 'LibraryAddCheck'

/**
 * Material Icon: Library Add Check
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:library_add_check Material Icon Docs}
 */
export const LibraryAddCheck = memo(Icon)
