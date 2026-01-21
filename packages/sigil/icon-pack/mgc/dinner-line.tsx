import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DinnerLine = /* @__PURE__ */ memo(function DinnerLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M14.707 2.293a1 1 0 0 1 0 1.414L10.414 8h2.172l5.707-5.707a1 1 0 1 1 1.414 1.414L15.414 8h4.524a1 1 0 0 1 .992.876 9 9 0 0 1-5.336 9.377l.376 1.505A1 1 0 0 1 15 21H9a1 1 0 0 1-.97-1.242l.376-1.505A9 9 0 0 1 3.07 8.876 1 1 0 0 1 4.062 8h3.524l5.707-5.707a1 1 0 0 1 1.414 0M5 10a7 7 0 0 0 4.893 6.678 1 1 0 0 1 .67 1.196L10.28 19h3.438l-.281-1.126a1 1 0 0 1 .67-1.196A7 7 0 0 0 19 10z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Dinner Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { DinnerLine }
