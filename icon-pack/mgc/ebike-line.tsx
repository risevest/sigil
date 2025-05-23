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
          d="M14 3a2 2 0 0 1 2 2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-1.51 1.94l2.142 4.996c.264.527.368.985.368 1.564a3.5 3.5 0 0 1-6.663 1.5H9.663a3.5 3.5 0 0 1-6.628-1H3a1 1 0 0 1-1-1V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 1 0 4 0V5h-2a1 1 0 1 1 0-2zM6.5 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m12 0a1.5 1.5 0 1 0 1.5 1.5c0-.811-.685-1.5-1.5-1.5m-1.16-5H16a4 4 0 0 1-7.465 2H4v2.05A3.5 3.5 0 0 1 9.965 17h5.07c.25-1.749 1.83-3.06 3.592-2.998L17.341 11ZM8 9H4v2h4zm11-2h-3v2h3z"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'EbikeLine'

/**
 * MingCute Icon: Ebike Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EbikeLine = memo(Icon)
