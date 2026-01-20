import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowUpCircleFill = /* @__PURE__ */ memo(function ArrowUpCircleFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.105.074.014.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.092.01-.009.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m-4.242 9.996a1 1 0 0 0 1.414 0L11 10.167v6.076a1 1 0 1 0 2 0v-6.076l1.829 1.829a1 1 0 0 0 1.414-1.415l-3.536-3.535a1 1 0 0 0-1.414 0L7.758 10.58a1 1 0 0 0 0 1.415Z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Arrow Up Circle Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { ArrowUpCircleFill }
