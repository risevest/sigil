import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowRightDownLine = /* @__PURE__ */ memo(function ArrowRightDownLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.105.074.014.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.092.01-.009.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M17 15.586V10a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1h-8a1 1 0 1 1 0-2h5.586l-9.95-9.95A1 1 0 0 1 7.05 5.636z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Arrow Right Down Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { ArrowRightDownLine }
