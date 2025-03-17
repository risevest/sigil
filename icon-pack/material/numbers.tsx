import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.5 10L21 8H17L18 4H16L15 8H11L12 4H10L9 8H5L4.5 10H8.5L7.5 14H3.5L3 16H7L6 20H8L9 16H13L12 20H14L15 16H19L19.5 14H15.5L16.5 10H20.5ZM13.5 14H9.5L10.5 10H14.5L13.5 14Z" />
    </Svg>
  )
}

Icon.displayName = 'Numbers'

/**
 * Material Icon: Numbers
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:numbers Material Icon Docs}
 */
export const Numbers = memo(Icon)
