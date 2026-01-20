import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RotateToVerticalFill = /* @__PURE__ */ memo(function RotateToVerticalFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm11 15a1 1 0 0 1 1-1h4v-6h-4a1 1 0 1 1 0-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a1 1 0 0 1-1-1m4-16a1 1 0 0 1 .705 1.709c.684.438 1.383.965 2.002 1.584a1 1 0 0 1-1.414 1.414c-1.084-1.084-2.526-1.863-3.523-2.317l-.398-.174-.174-.072c-.618-.251-.737-.867-.667-1.237.07-.372.41-.907 1.085-.907z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Rotate To Vertical Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { RotateToVerticalFill }
