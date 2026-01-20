import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Telescope2Fill = /* @__PURE__ */ memo(function Telescope2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M8.5 3A2.5 2.5 0 0 1 11 5.5V7h2V5.5a2.5 2.5 0 0 1 2.336-2.495L15.559 3a3 3 0 0 1 2.845 2.051l3.202 9.605A4.5 4.5 0 1 1 13 16.5V9h-2v7.5a4.5 4.5 0 1 1-8.606-1.844l3.201-9.605a3 3 0 0 1 2.663-2.045zm-2 11C5.145 14 4 15.149 4 16.5A2.5 2.5 0 1 0 6.5 14m11 0a2.5 2.5 0 1 0 2.5 2.5c0-1.351-1.145-2.5-2.5-2.5"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Telescope 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { Telescope2Fill }
