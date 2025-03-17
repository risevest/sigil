import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 6H9V4H11V6ZM15 4H13V6H15V4ZM9 14H11V12H9V14ZM19 10V8H17V10H19ZM19 14V12H17V14H19ZM13 14H15V12H13V14ZM19 4H17V6H19V4ZM13 8V6H11V8H13ZM7 10V8H9V6H7V4H5V20H7V12H9V10H7ZM15 12H17V10H15V12ZM11 10V12H13V10H11ZM9 8V10H11V8H9ZM13 10H15V8H13V10ZM15 6V8H17V6H15Z" />
    </Svg>
  )
}

Icon.displayName = 'SportsScore'

/**
 * Material Icon: Sports Score
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sports_score Material Icon Docs}
 */
export const SportsScore = memo(Icon)
