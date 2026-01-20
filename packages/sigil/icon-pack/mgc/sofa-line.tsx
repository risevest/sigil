import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SofaLine = /* @__PURE__ */ memo(function SofaLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M10 3a5 5 0 0 0-5 5v1.17A3 3 0 0 0 3 12v5a2 2 0 0 0 2 2v1a1 1 0 1 0 2 0v-1h10v1a1 1 0 1 0 2 0v-1a2 2 0 0 0 2-2v-5a3 3 0 0 0-2-2.83V8a5 5 0 0 0-5-5zm7 6.17V8a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1.17c1.165.413 2 1.524 2 2.83v1h6v-1c0-1.306.835-2.417 2-2.83M5 12a1 1 0 1 1 2 0v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v5H5z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Sofa Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { SofaLine }
