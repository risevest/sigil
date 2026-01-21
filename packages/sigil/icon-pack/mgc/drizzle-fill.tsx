import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DrizzleFill = /* @__PURE__ */ memo(function DrizzleFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M10.924 15.792a1 1 0 0 1 1.932.518l-.259.966a1 1 0 0 1-1.932-.518zM11.5 2a6.5 6.5 0 0 1 6.086 4.212A6.002 6.002 0 0 1 16 18h-1.534q.034-.101.063-.207l.259-.965a3 3 0 1 0-5.796-1.553l-.259.966a3 3 0 0 0 0 1.552 3 3 0 0 0-.189.207H7a5 5 0 0 1-2-9.584A6.5 6.5 0 0 1 11.5 2m.32 18.174a1 1 0 1 0-1.931-.518l-.259.966a1 1 0 0 0 1.932.518z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Drizzle Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { DrizzleFill }
