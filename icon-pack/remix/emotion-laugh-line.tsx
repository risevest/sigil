import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 11C14 11 15.6667 11.3333 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C8.33333 11.3333 10 11 12 11ZM8.5 7C9.70968 7 10.7187 7.85917 10.9501 9.00057H6.04989C6.28131 7.85917 7.29032 7 8.5 7ZM15.5 7C16.7097 7 17.7187 7.85917 17.9501 9.00057H13.0499C13.2813 7.85917 14.2903 7 15.5 7Z" />
    </Svg>
  )
}

Icon.displayName = 'EmotionLaughLine'

/**
 * Remix Icon: Emotion Laugh Line
 * @see {@link https://remixicon.com/icon/emotion-laugh-line Remix Icon Docs}
 */
export const EmotionLaughLine = memo(Icon)
