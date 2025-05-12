import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M18 22L17.99 16L14 12L17.99 7.99L18 2H6V8L10 12L6 15.99V22H18ZM8 7.5V4H16V7.5L12 11.5L8 7.5Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'HourglassBottom'

/**
 * Material Icon: Hourglass Bottom
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hourglass_bottom Material Icon Docs}
 */
export const HourglassBottom = memo(Icon)
