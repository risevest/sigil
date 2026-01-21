import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StopwatchLine = /* @__PURE__ */ memo(function StopwatchLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 2c.937 0 1.85.108 2.726.311a1 1 0 1 1-.452 1.948 10 10 0 0 0-1.499-.23l-.074-.002a8.95 8.95 0 0 1 4.341 1.517l.606-.606a1 1 0 1 1 1.415 1.414l-.495.495a9 9 0 1 1-7.16-2.827l-.136.006a10 10 0 0 0-1.546.233 1 1 0 0 1-.452-1.948C10.15 2.108 11.064 2 12 2m0 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m0 2a1 1 0 0 1 .993.883L13 9v4a1 1 0 0 1-1.993.117L11 13V9a1 1 0 0 1 1-1"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Stopwatch Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { StopwatchLine }
