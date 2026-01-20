import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SleepFill = /* @__PURE__ */ memo(function SleepFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M11.5 4A1.5 1.5 0 0 0 13 5.5h3.379l-4.44 4.44A1.5 1.5 0 0 0 13 12.5h7a1.5 1.5 0 1 0 0-3h-3.379l4.44-4.44A1.5 1.5 0 0 0 20 2.5h-7A1.5 1.5 0 0 0 11.5 4M4 10.5a1.5 1.5 0 1 1 0-3h5a1.5 1.5 0 0 1 1.06 2.56L7.622 12.5H9a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1-1.06-2.56l2.439-2.44zm8 7a1.5 1.5 0 0 1 0-3h4a1.5 1.5 0 0 1 1.06 2.56l-1.439 1.44H16a1.5 1.5 0 1 1 0 3h-4a1.5 1.5 0 0 1-1.06-2.56l1.439-1.44z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Sleep Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { SleepFill }
