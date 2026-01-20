import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BackpackLine = /* @__PURE__ */ memo(function BackpackLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 2a4 4 0 0 1 3.894 3.08A5 5 0 0 1 20 10v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-9a5 5 0 0 1 4.106-4.92A4 4 0 0 1 12 2m3 5H9a3 3 0 0 0-2.995 2.824L6 10v9a1 1 0 0 0 .883.993L7 20h1v-5a2 2 0 0 1 1.85-1.995L10 13h4a2 2 0 0 1 1.995 1.85L16 15v5h1a1 1 0 0 0 .993-.883L18 19v-9a3 3 0 0 0-2.824-2.995zm-1 11h-4v2h4zm0-3h-4v1h4zm-1-6a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zm-1-5c-.683 0-1.287.343-1.647.866L10.268 5h3.464A2 2 0 0 0 12 4"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Backpack Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { BackpackLine }
