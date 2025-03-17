import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 4.0698V2.0498C8.98999 2.2498 7.15999 3.0498 5.67999 4.2598L7.09999 5.6898C8.20999 4.8298 9.53999 4.2498 11 4.0698ZM18.32 4.2598C16.84 3.0498 15.01 2.2498 13 2.0498V4.0698C14.46 4.2498 15.79 4.8298 16.9 5.6898L18.32 4.2598ZM19.93 10.9998H21.95C21.75 8.9898 20.95 7.1598 19.74 5.6798L18.31 7.0998C19.17 8.20981 19.75 9.5398 19.93 10.9998ZM5.68999 7.0998L4.25999 5.6798C3.04999 7.1598 2.24999 8.9898 2.04999 10.9998H4.06999C4.24999 9.5398 4.82999 8.20981 5.68999 7.0998ZM4.06999 12.9998H2.04999C2.24999 15.0098 3.04999 16.8398 4.25999 18.3198L5.68999 16.8898C4.82999 15.7898 4.24999 14.4598 4.06999 12.9998ZM15 11.9998C15 10.3398 13.66 8.9998 12 8.9998C10.34 8.9998 8.99999 10.3398 8.99999 11.9998C8.99999 13.6598 10.34 14.9998 12 14.9998C13.66 14.9998 15 13.6598 15 11.9998ZM18.31 16.8998L19.74 18.3298C20.95 16.8498 21.75 15.0098 21.95 13.0098H19.93C19.75 14.4598 19.17 15.7898 18.31 16.8998ZM13 19.9298V21.9498C15.01 21.7498 16.84 20.9498 18.32 19.7398L16.89 18.3098C15.79 19.1698 14.46 19.7498 13 19.9298ZM5.67999 19.7398C7.15999 20.9498 8.99999 21.7498 11 21.9498V19.9298C9.53999 19.7498 8.20999 19.1698 7.09999 18.3098L5.67999 19.7398Z" />
    </Svg>
  )
}

Icon.displayName = 'FilterTiltShift'

/**
 * Material Icon: Filter Tilt Shift
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:filter_tilt_shift Material Icon Docs}
 */
export const FilterTiltShift = memo(Icon)
