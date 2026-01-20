import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Attachment2Line = /* @__PURE__ */ memo(function Attachment2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M5.636 10.586a3.5 3.5 0 1 1 4.95-4.95l7.778 7.778a3.5 3.5 0 0 1-4.95 4.95l-4.066-4.066a1.25 1.25 0 1 1 1.768-1.768l3.712 3.713a1 1 0 0 0 1.415-1.415l-3.713-3.712a3.25 3.25 0 0 0-4.596 4.596L12 19.778A5.5 5.5 0 1 0 19.778 12L12 4.222A5.5 5.5 0 1 0 4.222 12l.353.353A1 1 0 1 0 5.99 10.94z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Attachment 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { Attachment2Line }
