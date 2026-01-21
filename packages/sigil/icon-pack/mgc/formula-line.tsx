import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FormulaLine = /* @__PURE__ */ memo(function FormulaLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M5 4.5A1.5 1.5 0 0 1 6.5 3h11A1.5 1.5 0 0 1 19 4.5V5a1 1 0 1 1-2 0H7v.54l6.562 5.625a1.1 1.1 0 0 1 0 1.67L7 18.46V19h10a1 1 0 1 1 2 0v.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-1.27a1.5 1.5 0 0 1 .524-1.139L11.464 12l-5.94-5.091A1.5 1.5 0 0 1 5 5.77z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Formula Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { FormulaLine }
