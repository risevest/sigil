import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 11C10 11 8.33333 11.3333 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C15.6667 11.3333 14 11 12 11ZM8.5 7C7.34792 7 6.37786 7.77929 6.08818 8.8395L6.04989 9.00057H10.9501C10.7187 7.85917 9.70968 7 8.5 7ZM15.5 7C14.3479 7 13.3779 7.77929 13.0882 8.8395L13.0499 9.00057H17.9501C17.7187 7.85917 16.7097 7 15.5 7Z" />
    </Svg>
  )
}

Icon.displayName = 'EmotionLaughFill'

/**
 * Remix Icon: Emotion Laugh Fill
 * @see {@link https://remixicon.com/icon/emotion-laugh-fill Remix Icon Docs}
 */
export const EmotionLaughFill = memo(Icon)
