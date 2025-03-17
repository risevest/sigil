import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 4.5V10.09H7.5L12 14.59L16.5 10.09H13V4.5H11ZM6 13.5C6 16.81 8.69 19.5 12 19.5C15.31 19.5 18 16.81 18 13.5H16C16 15.71 14.21 17.5 12 17.5C9.79 17.5 8 15.71 8 13.5H6Z" />
    </Svg>
  )
}

Icon.displayName = 'PlayForWork'

/**
 * Material Icon: Play For Work
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:play_for_work Material Icon Docs}
 */
export const PlayForWork = memo(Icon)
