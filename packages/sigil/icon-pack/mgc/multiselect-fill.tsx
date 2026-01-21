import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MultiselectFill = /* @__PURE__ */ memo(function MultiselectFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2zM6 9H4v11h11v-2H8a2 2 0 0 1-2-2zm11.89-1.768a1 1 0 0 0-1.32-.083l-.095.083-3.536 3.536-1.414-1.414a1 1 0 0 0-1.497 1.32l.083.094 2.05 2.05a1.1 1.1 0 0 0 1.46.086l.096-.085 4.172-4.172a1 1 0 0 0 0-1.415Z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Multiselect Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { MultiselectFill }
