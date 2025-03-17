import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 9L12 2L2 9H11V22H13V9H22ZM12 4.44L15.66 7H8.34L12 4.44Z" />
      <Path d="M4.14 12L2.18 12.37L3 16.74V22H5L5.02 18H7V22H9V16H4.9L4.14 12Z" />
      <Path d="M19.1 16H15V22H17V18H18.98L19 22H21V16.74L21.82 12.37L19.86 12L19.1 16Z" />
    </Svg>
  )
}

Icon.displayName = 'Deck'

/**
 * Material Icon: Deck
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:deck Material Icon Docs}
 */
export const Deck = memo(Icon)
