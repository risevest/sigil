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
          d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16M3.2 5.4a1 1 0 1 1 1.599 1.2A8.956 8.956 0 0 0 3 12c0 2.027.67 3.895 1.799 5.4a1 1 0 0 1-1.6 1.2A10.956 10.956 0 0 1 1 12c0-2.475.819-4.762 2.2-6.6m16.2-.2a1 1 0 0 1 1.4.2A10.956 10.956 0 0 1 23 12c0 2.475-.819 4.762-2.2 6.6a1 1 0 1 1-1.599-1.2A8.956 8.956 0 0 0 21 12c0-2.027-.67-3.895-1.799-5.4a1 1 0 0 1 .2-1.4ZM13 8h-2.5a1.5 1.5 0 0 0-1.493 1.356L9 9.5V15a1 1 0 0 0 1.993.117L11 15v-1h2a3 3 0 1 0 0-6m0 2a1 1 0 0 1 .117 1.993L13 12h-2v-2z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ParkFill'

/**
 * MingCute Icon: Park Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ParkFill = memo(Icon)
