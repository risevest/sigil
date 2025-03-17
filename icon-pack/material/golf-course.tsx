import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 21C19.8284 21 20.5 20.3284 20.5 19.5C20.5 18.6716 19.8284 18 19 18C18.1716 18 17.5 18.6716 17.5 19.5C17.5 20.3284 18.1716 21 19 21Z" />
      <Path d="M16.5 5.92L8.5 2V20H6.5V18.27C4.71 18.62 3.5 19.26 3.5 20C3.5 21.1 6.19 22 9.5 22C12.81 22 15.5 21.1 15.5 20C15.5 19.01 13.34 18.19 10.5 18.03V8.98L16.5 5.92Z" />
    </Svg>
  )
}

Icon.displayName = 'GolfCourse'

/**
 * Material Icon: Golf Course
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:golf_course Material Icon Docs}
 */
export const GolfCourse = memo(Icon)
