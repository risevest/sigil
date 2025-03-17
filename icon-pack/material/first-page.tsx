import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.205 16.59L13.615 12L18.205 7.41L16.795 6L10.795 12L16.795 18L18.205 16.59ZM5.79504 6H7.79504V18H5.79504V6Z" />
    </Svg>
  )
}

Icon.displayName = 'FirstPage'

/**
 * Material Icon: First Page
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:first_page Material Icon Docs}
 */
export const FirstPage = memo(Icon)
