import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M1 12.5C1 11.4 1.9 10.5 3 10.5C4.1 10.5 5 11.4 5 12.5C5 13.6 4.1 14.5 3 14.5C1.9 14.5 1 13.6 1 12.5ZM8.89 9.61L13.42 8.4L12.64 5.5L8.11 6.71C7.31 6.92 6.83 7.75 7.05 8.55C7.27 9.35 8.09 9.83 8.89 9.61ZM20.5 5.4L23 2.5L22 1.5L19 4.5L17 8.5L7.52 11.37C6.7 11.57 6.13 12.26 6.02 13.05L5.24 17.5L2.4 21.3L4 22.5L7 18.5L8.14 15.36L14 13.5L19 10L20.5 5.4Z" />
    </Svg>
  )
}

Icon.displayName = 'ScubaDiving'

/**
 * Material Icon: Scuba Diving
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:scuba_diving Material Icon Docs}
 */
export const ScubaDiving = memo(Icon)
