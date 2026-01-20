import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AngryFill = /* @__PURE__ */ memo(function AngryFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 11a4.99 4.99 0 0 0-3.307 1.25 1 1 0 0 0 1.323 1.5A2.99 2.99 0 0 1 12 15a2.98 2.98 0 0 1 1.984.75 1 1 0 1 0 1.324-1.5A4.99 4.99 0 0 0 12 13M7.106 8.553a1 1 0 0 0 .447 1.341l2 1a1 1 0 1 0 .894-1.788l-2-1a1 1 0 0 0-1.341.447m8.447-.447-2 1a1 1 0 1 0 .894 1.788l2-1a1 1 0 1 0-.894-1.788"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Angry Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { AngryFill }
