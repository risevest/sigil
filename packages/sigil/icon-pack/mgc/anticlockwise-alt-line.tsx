import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AnticlockwiseAltLine = /* @__PURE__ */ memo(function AnticlockwiseAltLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M20 8a2 2 0 0 1 1.995 1.85L22 10v9a2 2 0 0 1-1.85 1.995L20 21H10a2 2 0 0 1-1.995-1.85L8 19v-9a2 2 0 0 1 1.85-1.995L10 8zm0 2H10v9h10zm-9.06-6.342a1 1 0 0 1-.598 1.282c-1.879.683-3.26 2.042-4.262 3.516s-1.584 3.008-1.875 3.935c-.231.735-.948.801-1.233.76-.284-.04-.972-.307-.972-1.095V7a1 1 0 0 1 2 0v.995q.2-.33.426-.664c1.15-1.693 2.835-3.4 5.232-4.271a1 1 0 0 1 1.282.598"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Anticlockwise Alt Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { AnticlockwiseAltLine }
