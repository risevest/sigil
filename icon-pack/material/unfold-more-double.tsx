import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.9999 7.83L15.1699 11L16.5799 9.59L11.9999 5L7.40991 9.59L8.82991 11L11.9999 7.83ZM11.9999 2.83L15.1699 6L16.5799 4.59L11.9999 0L7.40991 4.59L8.82991 6L11.9999 2.83ZM11.9999 21.17L8.82991 18L7.41991 19.41L11.9999 24L16.5899 19.41L15.1699 18L11.9999 21.17ZM11.9999 16.17L8.82991 13L7.41991 14.41L11.9999 19L16.5899 14.41L15.1699 13L11.9999 16.17Z" />
    </Svg>
  )
}

Icon.displayName = 'UnfoldMoreDouble'

/**
 * Material Icon: Unfold More Double
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:unfold_more_double Material Icon Docs}
 */
export const UnfoldMoreDouble = memo(Icon)
