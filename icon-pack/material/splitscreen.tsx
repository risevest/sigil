import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 4V9H6V4H18ZM18 2H6C4.9 2 4 2.9 4 4V9C4 10.1 4.9 11 6 11H18C19.1 11 20 10.1 20 9V4C20 2.9 19.1 2 18 2ZM18 15V20H6V15H18ZM18 13H6C4.9 13 4 13.9 4 15V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V15C20 13.9 19.1 13 18 13Z" />
    </Svg>
  )
}

Icon.displayName = 'Splitscreen'

/**
 * Material Icon: Splitscreen
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:splitscreen Material Icon Docs}
 */
export const Splitscreen = memo(Icon)
