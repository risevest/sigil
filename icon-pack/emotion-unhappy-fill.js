import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM7 17H9C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17H17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17ZM8 11C8.82843 11 9.5 10.3284 9.5 9.5C9.5 8.67157 8.82843 8 8 8C7.17157 8 6.5 8.67157 6.5 9.5C6.5 10.3284 7.17157 11 8 11ZM16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z" />
    </Svg>
  )
}

Icon.displayName = 'EmotionUnhappyFill'

/**
 * Remix Icon: Emotion Unhappy Fill
 * @see {@link https://remixicon.com/icon/emotion-unhappy-fill Remix Icon Docs}
 */
export const EmotionUnhappyFill = memo(Icon)
