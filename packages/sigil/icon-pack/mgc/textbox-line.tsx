import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TextboxLine = /* @__PURE__ */ memo(function TextboxLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 3c.768 0 1.47.289 2 .764A3 3 0 0 1 16 3h1a1 1 0 1 1 0 2h-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1c-.768 0-1.47-.289-2-.764A3 3 0 0 1 12 21h-1a1 1 0 1 1 0-2h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1a1 1 0 1 1 0-2zm0 4v2H5v6h7v2H5a2 2 0 0 1-1.995-1.85L3 15V9a2 2 0 0 1 1.85-1.995L5 7zm7 0a2 2 0 0 1 1.995 1.85L21 9v6a2 2 0 0 1-1.85 1.995L19 17h-3v-2h3V9h-3V7z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Textbox Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { TextboxLine }
