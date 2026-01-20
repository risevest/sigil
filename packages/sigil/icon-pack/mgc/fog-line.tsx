import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FogLine = /* @__PURE__ */ memo(function FogLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M11.5 2A6.5 6.5 0 0 0 5 8.416a5 5 0 0 0-2.961 3.96 1 1 0 1 0 1.984.248A3 3 0 0 1 6.27 10.09 1.01 1.01 0 0 0 7.027 9a4.5 4.5 0 0 1 8.817-1.679c.104.382.422.668.811.732a4 4 0 0 1 3.325 4.348 1 1 0 1 0 1.99.198 6 6 0 0 0-4.385-6.387A6.5 6.5 0 0 0 11.5 2M3 16a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m4 4a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Fog Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { FogLine }
