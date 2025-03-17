import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 12V14.5L19.5 20H22L14 12ZM14 20H17L14 17V20ZM8 4L2 10H4V20H12V10H14L8 4ZM9 14H7V10H9V14Z" />
    </Svg>
  )
}

Icon.displayName = 'WbShade'

/**
 * Material Icon: Wb Shade
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wb_shade Material Icon Docs}
 */
export const WbShade = memo(Icon)
