import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.39L12 4.14L18 6.39V11.09ZM9.91 8.5L8.5 9.91L10.59 12L8.5 14.09L9.91 15.5L12 13.42L14.09 15.5L15.5 14.09L13.42 12L15.5 9.91L14.09 8.5L12 10.59L9.91 8.5Z" />
    </Svg>
  )
}

Icon.displayName = 'GppBad'

/**
 * Material Icon: Gpp Bad
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:gpp_bad Material Icon Docs}
 */
export const GppBad = memo(Icon)
