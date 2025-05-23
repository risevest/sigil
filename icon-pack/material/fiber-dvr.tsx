import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.87 12.43L10.87 9H9.37L11.12 15H12.62L14.37 9H12.87L11.87 12.43ZM21 11.5V10.5C21 9.65 20.35 9 19.5 9H16V15H17.5V13H18.65L19.5 15H21L20.1 12.9C20.6 12.65 21 12.1 21 11.5ZM19.5 11.5H17.5V10.5H19.5V11.5ZM6.5 9H3V15H6.5C7.35 15 8 14.35 8 13.5V10.5C8 9.65 7.35 9 6.5 9ZM6.5 13.5H4.5V10.5H6.5V13.5Z" />
    </Svg>
  )
}

Icon.displayName = 'FiberDvr'

/**
 * Material Icon: Fiber Dvr
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fiber_dvr Material Icon Docs}
 */
export const FiberDvr = memo(Icon)
