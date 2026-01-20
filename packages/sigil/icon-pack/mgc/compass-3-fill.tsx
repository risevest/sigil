import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Compass3Fill = /* @__PURE__ */ memo(function Compass3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M20.342 4.958a1 1 0 0 0-1.3-1.3L8.853 7.74a2 2 0 0 0-1.112 1.113L3.658 19.042a1 1 0 0 0 1.3 1.3l10.188-4.083a2 2 0 0 0 1.113-1.112zM9.705 9.705a.1.1 0 0 1 .033-.164l7.878-3.157-3.157 7.878a.1.1 0 0 1-.164.034z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Compass 3 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { Compass3Fill }
