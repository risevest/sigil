import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AlignArrowRightFill = /* @__PURE__ */ memo(function AlignArrowRightFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M14.944 6.697a1.5 1.5 0 0 0 0 2.121l1.682 1.682H9a1.5 1.5 0 0 0 0 3h7.626l-1.682 1.682a1.5 1.5 0 1 0 2.121 2.121l4.243-4.242a1.5 1.5 0 0 0 0-2.121l-4.243-4.243a1.5 1.5 0 0 0-2.121 0M2.5 19a1.5 1.5 0 0 0 3 0V5a1.5 1.5 0 1 0-3 0z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Align Arrow Right Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { AlignArrowRightFill }
