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
          d="M18.141 7.577a1.5 1.5 0 0 1 .949 1.897l-.527 1.582a6.5 6.5 0 0 1-6.167 4.444H9.854a1.5 1.5 0 0 0-1.341.83l-2.171 4.34a1.5 1.5 0 1 1-2.684-1.34l2.171-4.342A4.5 4.5 0 0 1 9.854 12.5h2.542a3.5 3.5 0 0 0 3.32-2.393l.528-1.581a1.5 1.5 0 0 1 1.897-.949M7.946 3.715l.114.103 2.12 2.121a1.5 1.5 0 0 1 .1 2.012l-.1.11-2.12 2.121a1.5 1.5 0 0 1-2.225-2.007l.103-.114L6.998 7l-1.06-1.06a1.5 1.5 0 0 1 1.886-2.314zM18.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'FanDirectionFrontFill'

/**
 * MingCute Icon: Fan Direction Front Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FanDirectionFrontFill = memo(Icon)
