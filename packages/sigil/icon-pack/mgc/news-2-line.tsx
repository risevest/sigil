import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const News2Line = /* @__PURE__ */ memo(function News2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M6 4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H5.5A2.5 2.5 0 0 1 3 18.5V11a1 1 0 0 1 1-1h2zm0 8H5v6.5a.5.5 0 0 0 1 0zm1.95 7H18a1 1 0 0 0 1-1V5H8v13.5q0 .257-.05.5M10 8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm2 1v1h3V9zm-2 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: News 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { News2Line }
