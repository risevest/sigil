import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M10.5 12a1.5 1.5 0 0 1 1.493 1.356L12 13.5v5a1.5 1.5 0 0 1-2.993.144L9 18.5v-1.379l-3.94 3.94a1.5 1.5 0 0 1-2.224-2.008l.103-.114L6.88 15H5.5a1.5 1.5 0 0 1-.144-2.993L5.5 12zm8.44-9.06a1.5 1.5 0 0 1 2.224 2.007l-.103.114L17.12 9h1.38a1.5 1.5 0 0 1 .144 2.993L18.5 12h-5a1.5 1.5 0 0 1-1.493-1.356L12 10.5v-5a1.5 1.5 0 0 1 2.993-.144L15 5.5v1.379l3.94-3.94Z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'FullscreenExit2Fill'
/**
 * MingCute Icon: Fullscreen Exit 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FullscreenExit2Fill = Icon
