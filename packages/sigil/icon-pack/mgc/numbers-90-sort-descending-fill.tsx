import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Numbers90SortDescendingFill = /* @__PURE__ */ memo(
  function Numbers90SortDescendingFill(_props: IconProps) {
    const { color = 'black', size = 24, ...props } = _props
    return (
      <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
        <G fill="none" fillRule="evenodd">
          <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
          <Path
            fill={color}
            d="M4.5 5.5a3.5 3.5 0 0 1 6.995-.192l.005.202c0 1.922-.799 3.472-1.53 4.494a10 10 0 0 1-.76.931l-.26.27a6 6 0 0 1-.516.469 1.5 1.5 0 0 1-1.988-2.241l.222-.197.124-.117.157-.159.088-.094A3.5 3.5 0 0 1 4.5 5.5M8 5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m10.5 0a1.5 1.5 0 0 0-3 0v11.207l-.268-.268a1.5 1.5 0 0 0-2.121 2.121l2.828 2.829a1.5 1.5 0 0 0 2.122 0l2.828-2.829a1.5 1.5 0 0 0-2.121-2.121l-.268.268zm-14 11.5a3.5 3.5 0 1 1 7 0v2a3.5 3.5 0 1 1-7 0zM8 16a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 16"
          />
        </G>
      </Svg>
    )
  }
)
/**
 * MingCute Icon: Numbers 90 Sort Descending Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { Numbers90SortDescendingFill }
