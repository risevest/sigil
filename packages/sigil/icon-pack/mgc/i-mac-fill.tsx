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
          d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4.968c-.114 1.634-.49 2.123-.547 2.188-.446.344-.424.86-.34 1.116.087.262.382.696.961.696h3.916c.579 0 .874-.434.96-.696.085-.256.107-.772-.339-1.116-.058-.065-.433-.553-.547-2.188H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 12v-2h14v2z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'IMacFill'
/**
 * MingCute Icon: I Mac Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const IMacFill = Icon
