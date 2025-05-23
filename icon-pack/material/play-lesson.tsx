import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 19.5V3.5H6V10.5L8.5 9L11 10.5V3.5H16V10.58C16.33 10.53 16.66 10.5 17 10.5C17.34 10.5 17.67 10.53 18 10.58V3.5C18 2.4 17.1 1.5 16 1.5H4C2.9 1.5 2 2.4 2 3.5V19.5C2 20.6 2.9 21.5 4 21.5H11.26C10.84 20.9 10.51 20.22 10.29 19.5H4ZM17 12.5C14.24 12.5 12 14.74 12 17.5C12 20.26 14.24 22.5 17 22.5C19.76 22.5 22 20.26 22 17.5C22 14.74 19.76 12.5 17 12.5ZM15.75 20V15L19.75 17.5L15.75 20Z" />
    </Svg>
  )
}

Icon.displayName = 'PlayLesson'

/**
 * Material Icon: Play Lesson
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:play_lesson Material Icon Docs}
 */
export const PlayLesson = memo(Icon)
