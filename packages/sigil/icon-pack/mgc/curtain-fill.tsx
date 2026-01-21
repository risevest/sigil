import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CurtainFill = /* @__PURE__ */ memo(function CurtainFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a1 1 0 0 0 .77-.37A1 1 0 0 0 8 19.8s-.27-1.38-.53-3-.41-2.6-.47-3.37a9.64 9.64 0 0 0 2.4-4.14A15.8 15.8 0 0 0 10 5h4c0 1.91.4 5.88 3 8.43-.12 2.1-1 6.33-1 6.37a1 1 0 0 0 .21.83A1 1 0 0 0 17 21h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Curtain Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { CurtainFill }
