import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M2 11.5C2 6.643 6.656 3 12 3s10 3.643 10 8.5S17.344 20 12 20c-.525 0-1.042-.034-1.546-.1l-2.9 1.932a1 1 0 0 1-1.535-1.028l.445-2.221C3.828 17.09 2 14.517 2 11.5M10 7a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m1 5.5c0-.221.073-.442.22-.625l2-2.5a1 1 0 0 1 1.56 1.25l-1.5 1.875 1.5 1.875a1 1 0 1 1-1.56 1.25l-2-2.5A.998.998 0 0 1 11 12.5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'KakaoTalkFill'

/**
 * MingCute Icon: Kakao Talk Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const KakaoTalkFill = memo(Icon)
