import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 12V6H4V18H14V20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H20C21.1 4 22 4.9 22 6V12H20ZM19 14C17.34 14 16 15.34 16 17C16 18.66 17.34 20 19 20C20.66 20 22 18.66 22 17C22 15.34 20.66 14 19 14ZM14.66 8H9V13.66H11V11.42L13.95 14.37L15.36 12.96L12.41 10H14.65V8H14.66Z" />
    </Svg>
  )
}

Icon.displayName = 'PinEnd'

/**
 * Material Icon: Pin End
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:pin_end Material Icon Docs}
 */
export const PinEnd = memo(Icon)
