import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 12.9C15.28 12.44 17 10.42 17 8C17 5.24 14.76 3 12 3C9.24 3 7 5.24 7 8C7 10.42 8.72 12.44 11 12.9V17.17L9.41 15.58L8 17L12 21L16 17L14.59 15.59L13 17.17V12.9ZM15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5C13.66 5 15 6.34 15 8Z" />
    </Svg>
  )
}

Icon.displayName = 'SwipeDownAlt'

/**
 * Material Icon: Swipe Down Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:swipe_down_alt Material Icon Docs}
 */
export const SwipeDownAlt = memo(Icon)
