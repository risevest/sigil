import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RedPacketFill = /* @__PURE__ */ memo(function RedPacketFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M20 6.762V19a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V6.762l.671.805a9.54 9.54 0 0 0 5.834 3.315L10.5 11a1.5 1.5 0 0 0 3 0l-.005-.118a9.54 9.54 0 0 0 5.617-3.064l.217-.25zM17 2a3 3 0 0 1 2.714 1.72l.075.172-1.997 2.395a7.54 7.54 0 0 1-11.394.22l-.19-.22L4.21 3.892A3 3 0 0 1 6.8 2.006L7 2z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Red Packet Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { RedPacketFill }
