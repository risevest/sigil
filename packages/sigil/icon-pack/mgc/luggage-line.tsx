import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LuggageLine = /* @__PURE__ */ memo(function LuggageLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M14 2a2 2 0 0 1 1.995 1.85L16 4v2h1a2 2 0 0 1 1.995 1.85L19 8v11a2 2 0 0 1-2 2 1 1 0 0 1-1.993.117L15 21H9a1 1 0 1 1-2 0 2 2 0 0 1-1.995-1.85L5 19V8a2 2 0 0 1 1.85-1.995L7 6h1V4a2 2 0 0 1 1.85-1.995L10 2zm3 6H7v11h10zm-7 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m0-6h-4v2h4z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Luggage Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { LuggageLine }
