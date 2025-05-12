import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M6 2L6.01 8L10 12L6.01 16.01L6 22H18V16L14 12L18 8.01V2H6ZM16 16.5V20H8V16.5L12 12.5L16 16.5Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'HourglassTop'

/**
 * Material Icon: Hourglass Top
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hourglass_top Material Icon Docs}
 */
export const HourglassTop = memo(Icon)
