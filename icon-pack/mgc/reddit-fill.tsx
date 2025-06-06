import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m3 4c-.3 0-.568.131-.751.34l-1.65-.33a.5.5 0 0 0-.594.42l-.368 2.578c-1.423.063-2.739.493-3.746 1.198a5.284 5.284 0 0 0-.547.439 1.5 1.5 0 0 0-1.34 2.684L6 13.5c0 1.382.802 2.532 1.891 3.294C8.983 17.56 10.439 18 12 18c1.56 0 3.017-.441 4.109-1.206C17.199 16.032 18 14.882 18 13.5l-.004-.17a1.5 1.5 0 0 0-1.34-2.685 5.287 5.287 0 0 0-.547-.44c-.94-.657-2.15-1.076-3.465-1.18l.276-1.931 1.132.226A1 1 0 1 0 15 6m-5.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'RedditFill'

/**
 * MingCute Icon: Reddit Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RedditFill = memo(Icon)
