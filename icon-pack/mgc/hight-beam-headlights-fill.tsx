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
          d="M16.612 3.956c-2.747-1.221-6.05.278-6.38 3.473A44.594 44.594 0 0 0 10 12c0 1.73.097 3.269.231 4.57.33 3.196 3.634 4.695 6.381 3.474l.225-.1a8.694 8.694 0 0 0 0-15.889l-.225-.1ZM3 6a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm0 5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm-1 6a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HightBeamHeadlightsFill'

/**
 * MingCute Icon: Hight Beam Headlights Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HightBeamHeadlightsFill = memo(Icon)
