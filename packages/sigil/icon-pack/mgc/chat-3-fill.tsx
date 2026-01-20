import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Chat3Fill = /* @__PURE__ */ memo(function Chat3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M2 11.5C2 6.643 6.656 3 12 3s10 3.643 10 8.5S17.344 20 12 20q-.981-.001-1.911-.155c-.093.073-.253.205-.45.344C9.07 20.59 8.249 21 7 21a1 1 0 0 1-1-1c0-.55.143-1.234-.094-1.756C3.577 16.723 2 14.298 2 11.5"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Chat 3 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { Chat3Fill }
