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
          d="M17 2a3 3 0 0 1 3 3v12a1 1 0 0 1 .351 1.936l-8 3a1 1 0 0 1-.702 0l-8-3A1 1 0 0 1 4 17V5a3 3 0 0 1 3-3zm0 2H7a1 1 0 0 0-.993.883L6 5v12.682l6 2.25 6-2.25V5a1 1 0 0 0-.883-.993zm-5 1a1 1 0 0 1 .993.883L13 6v1h2a1 1 0 0 1 .117 1.993L15 9h-5a.5.5 0 0 0-.09.992L10 10h4a2.5 2.5 0 0 1 .164 4.995L14 15h-1v1a1 1 0 0 1-1.993.117L11 16v-1H9a1 1 0 0 1-.117-1.993L9 13h5a.5.5 0 0 0 .09-.992L14 12h-4a2.5 2.5 0 0 1-.164-4.995L10 7h1V6a1 1 0 0 1 1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ReceiveMoneyLine'

/**
 * MingCute Icon: Receive Money Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ReceiveMoneyLine = memo(Icon)
