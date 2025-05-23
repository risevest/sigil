import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M17.42 3a2 2 0 0 1 1.649.868l.087.14L22.49 9.84a2 2 0 0 1-.208 2.283l-.114.123-9.283 9.283a1.25 1.25 0 0 1-1.666.091l-.102-.09-9.283-9.284a2 2 0 0 1-.4-2.257l.078-.15 3.333-5.832a2 2 0 0 1 1.572-1.001L6.58 3zm0 2H6.58l-3.333 5.833L12 19.586l8.753-8.753zM15 6a1 1 0 1 1 0 2h-2v1.545c.758.07 1.447.217 2.004.426.395.148.749.336 1.013.571.264.234.483.557.483.958 0 .401-.219.724-.483.958-.264.235-.618.423-1.013.57-.594.223-1.338.377-2.157.44A.995.995 0 0 1 13 14v2a1 1 0 1 1-2 0v-2c0-.196.056-.378.153-.532-.819-.063-1.563-.216-2.157-.44-.395-.147-.749-.335-1.013-.57-.264-.234-.483-.557-.483-.958 0-.401.219-.724.483-.958.264-.235.618-.423 1.013-.57.556-.21 1.245-.357 2.004-.427V8H9a1 1 0 1 1 0-2zm-2.001 4.55a1 1 0 0 1-1.998 0 6.778 6.778 0 0 0-1.654.357c-.33.124-.56.259-.701.383-.117.104-.14.172-.145.199L8.5 11.5c0 .013.005.085.146.21.14.124.372.26.701.382.655.246 1.592.408 2.653.408 1.06 0 1.998-.162 2.653-.408.329-.123.56-.258.7-.382a.46.46 0 0 0 .14-.178l.007-.032-.007-.032a.46.46 0 0 0-.14-.178c-.14-.124-.371-.26-.7-.382-.44-.165-1.008-.293-1.654-.358"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'TetherUsdtLine'

/**
 * MingCute Icon: Tether Usdt Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TetherUsdtLine = memo(Icon)
