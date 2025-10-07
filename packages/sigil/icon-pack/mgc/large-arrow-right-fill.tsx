import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M14.902 19.512C13.831 20.583 12 19.825 12 18.31V16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8V5.69c0-1.515 1.831-2.273 2.902-1.202l6.453 6.451a1.5 1.5 0 0 1 0 2.121z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'LargeArrowRightFill'
/**
 * MingCute Icon: Large Arrow Right Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const LargeArrowRightFill = Icon
