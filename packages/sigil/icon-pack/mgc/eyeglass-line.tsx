import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M8 3a1 1 0 0 1 0 2h-.512a1 1 0 0 0-.958.713l-2.026 6.753a4.502 4.502 0 0 1 6.25 2.565q.12-.03.246-.031h2q.128 0 .245.03a4.502 4.502 0 0 1 6.25-2.564L17.47 5.713A1 1 0 0 0 16.512 5H16a1 1 0 1 1 0-2h.512a3 3 0 0 1 2.873 2.138l2.235 7.45a9 9 0 0 1 .38 2.586V16.5a4.5 4.5 0 0 1-8.973.5h-2.054A4.5 4.5 0 0 1 2 16.5v-1.326a9 9 0 0 1 .38-2.586l2.235-7.45A3 3 0 0 1 7.488 3zm9.5 11a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m-11 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'EyeglassLine'
/**
 * MingCute Icon: Eyeglass Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EyeglassLine = Icon
