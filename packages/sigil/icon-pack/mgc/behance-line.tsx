import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BehanceLine = /* @__PURE__ */ memo(function BehanceLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M8 5a4 4 0 0 1 2.646 7A4 4 0 0 1 8 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm9.5 4c2.607 0 4.5 2.368 4.5 5a1 1 0 0 1-.883.993L21 15h-5.86c.358 1.224 1.353 2 2.36 2 1.08 0 1.692-.511 2.24-1.15a1 1 0 1 1 1.52 1.3l-.107.122-.229.246C20.202 18.26 19.146 19 17.5 19c-2.607 0-4.5-2.368-4.5-5s1.893-5 4.5-5M8 13H4v4h4a2 2 0 0 0 .15-3.995zm9.5-2c-1.007 0-2.002.776-2.36 2h4.72c-.358-1.224-1.353-2-2.36-2M8 7H4v4h4a2 2 0 1 0 0-4m11-1a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Behance Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { BehanceLine }
