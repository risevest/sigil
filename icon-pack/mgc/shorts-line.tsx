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
          d="M18.153 5a2 2 0 0 1 1.94 1.513l.033.158 1.666 10a2 2 0 0 1-1.826 2.324L19.82 19h-5.285a2 2 0 0 1-1.566-.756l-.098-.135L12 16.803l-.871 1.306a2 2 0 0 1-1.498.884L9.465 19H4.18a2 2 0 0 1-1.991-2.183l.019-.146 1.666-10a2 2 0 0 1 1.812-1.665L5.847 5zm.5 5H5.347L4.18 17h5.285l1.703-2.555a1 1 0 0 1 1.664 0L14.535 17h5.285zm-.5-3H5.847L5.68 8h12.64z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ShortsLine'

/**
 * MingCute Icon: Shorts Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ShortsLine = memo(Icon)
