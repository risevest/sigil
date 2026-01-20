import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Text2Line = /* @__PURE__ */ memo(function Text2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M5 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V6h-4v13h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1V6H7v1a1 1 0 0 1-2 0z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Text 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { Text2Line }
