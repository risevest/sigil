import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CornerUpLeftFill = /* @__PURE__ */ memo(function CornerUpLeftFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M10.56 3.44a1.5 1.5 0 0 1 0 2.12L8.622 7.5H16a3.5 3.5 0 0 1 3.5 3.5v7a1.5 1.5 0 0 1-3 0v-7a.5.5 0 0 0-.5-.5H8.621l1.94 1.94a1.5 1.5 0 0 1-2.122 2.12l-4.5-4.5a1.5 1.5 0 0 1 0-2.12l4.5-4.5a1.5 1.5 0 0 1 2.122 0"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Corner Up Left Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { CornerUpLeftFill }
