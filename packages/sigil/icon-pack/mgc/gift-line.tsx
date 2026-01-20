import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GiftLine = /* @__PURE__ */ memo(function GiftLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M9 2a4 4 0 0 1 3 1.354A4 4 0 0 1 15 2h.5A1.5 1.5 0 0 1 17 3.5V4c0 .729-.195 1.412-.535 2H19a2 2 0 0 1 2 2v3a2 2 0 0 1-1 1.732V18a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5.268A2 2 0 0 1 3 11V8a2 2 0 0 1 2-2h2.535A4 4 0 0 1 7 4v-.5A1.5 1.5 0 0 1 8.5 2zm9 11h-5v6h4l.117-.007a1 1 0 0 0 .876-.876L18 18zm-7 0H6v5a1 1 0 0 0 .883.993L7 19h4zm8-5h-6v3h6zm-8 0H5v3h6zM9 4a2 2 0 0 0 2 2 2 2 0 0 0-2-2m6 0a2 2 0 0 0-2 2 2 2 0 0 0 2-2"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Gift Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { GiftLine }
