import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.79504 7.41L10.385 12L5.79504 16.59L7.20504 18L13.205 12L7.20504 6L5.79504 7.41ZM16.205 6H18.205V18H16.205V6Z" />
    </Svg>
  )
}

Icon.displayName = 'LastPage'

/**
 * Material Icon: Last Page
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:last_page Material Icon Docs}
 */
export const LastPage = memo(Icon)
