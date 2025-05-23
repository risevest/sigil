import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 4.14V2H14V4H10V2H7V4.14C5.28 4.59 4 6.14 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.14 18.72 4.59 17 4.14ZM18 20H6V8C6 6.9 6.9 6 8 6H16C17.1 6 18 6.9 18 8V20ZM16.5 12V16H14.5V14H7.5V12H16.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Backpack'

/**
 * Material Icon: Backpack
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:backpack Material Icon Docs}
 */
export const Backpack = memo(Icon)
