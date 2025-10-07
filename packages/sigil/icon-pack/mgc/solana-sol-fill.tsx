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
          d="M7.293 4.293A1 1 0 0 1 8 4h13a1 1 0 0 1 .707 1.707l-3 3A1 1 0 0 1 18 9H5a1 1 0 0 1-.707-1.707zm-3.175 6.235A1 1 0 0 1 5 10h13a1 1 0 0 1 .832.445l2 3A1 1 0 0 1 20 15H7a1 1 0 0 1-.832-.445l-2-3a1 1 0 0 1-.05-1.027m2.175 5.765A1 1 0 0 1 7 16h13a1 1 0 0 1 .707 1.707l-3 3A1 1 0 0 1 17 21H4a1 1 0 0 1-.707-1.707z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'SolanaSolFill'
/**
 * MingCute Icon: Solana Sol Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SolanaSolFill = Icon
