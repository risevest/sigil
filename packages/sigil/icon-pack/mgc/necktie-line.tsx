import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const NecktieLine = /* @__PURE__ */ memo(function NecktieLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M8.185 3.864A1.5 1.5 0 0 1 9.64 2h4.72a1.5 1.5 0 0 1 1.455 1.864l-.778 3.112 2.727 9.09a2 2 0 0 1-.666 2.137l-4.473 3.578a1 1 0 0 1-1.25 0l-4.473-3.578a2 2 0 0 1-.666-2.137l2.727-9.09zM10.744 8h2.512l.9 3H13a1 1 0 1 0 0 2h1.756l1.092 3.64L12 19.72l-3.848-3.08zm2.975-4-.5 2h-2.438l-.5-2z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Necktie Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { NecktieLine }
