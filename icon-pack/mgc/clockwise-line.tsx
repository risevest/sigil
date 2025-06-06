import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M20 8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2zm0 2H10v9h10zm-8.944-7c.683 0 .975.517 1.067.84l.029.132c.04.285-.026 1.002-.76 1.233l-.402.132c-.934.321-2.257.875-3.534 1.743-1.474 1-2.833 2.383-3.516 4.262a1 1 0 1 1-1.88-.684c.872-2.397 2.578-4.082 4.272-5.232l.332-.22L6.995 5H6a1 1 0 0 1-.117-1.993L6 3z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ClockwiseLine'

/**
 * MingCute Icon: Clockwise Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ClockwiseLine = memo(Icon)
