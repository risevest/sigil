import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VideoCameraLine = /* @__PURE__ */ memo(function VideoCameraLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 3a4 4 0 0 1 3.446 6.033 3 3 0 0 1 2.549 2.788L18 12v.21l1.713-1.056a1.5 1.5 0 0 1 2.282 1.148l.005.129v5.138a1.5 1.5 0 0 1-2.175 1.34l-.112-.063L18 17.79V18a3 3 0 0 1-2.824 2.995L15 21H5a3 3 0 0 1-2.995-2.824L2 18v-6a3 3 0 0 1 1.545-2.624 3.5 3.5 0 0 1 5.138-4.612A4 4 0 0 1 12 3m3 8H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m5 2.326-2 1.232v.883l2 1.232zM12 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4M6.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Video Camera Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { VideoCameraLine }
