import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 22H2V2H4V22ZM22 7H6V10H22V7ZM16 14H6V17H16V14Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignHorizontalLeft'

/**
 * Material Icon: Align Horizontal Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:align_horizontal_left Material Icon Docs}
 */
export const AlignHorizontalLeft = memo(Icon)
