import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.6 10.81L16.19 9.4L19.75 5.85L21.16 7.26C21.05 7.29 17.6 10.81 17.6 10.81ZM13 3H11V8H13V3ZM6.4 10.81L7.81 9.4L4.26 5.84L2.84 7.26C2.95 7.29 6.4 10.81 6.4 10.81ZM20 14H16.58C15.81 15.76 14.04 17 12 17C9.96 17 8.19 15.76 7.42 14H4V19H20V14ZM20 12C21.1 12 22 12.9 22 14V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V14C2 12.9 2.9 12 4 12H9C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12H20Z" />
    </Svg>
  )
}

Icon.displayName = 'Upcoming'

/**
 * Material Icon: Upcoming
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:upcoming Material Icon Docs}
 */
export const Upcoming = memo(Icon)
