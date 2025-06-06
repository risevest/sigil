import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 3a6.002 6.002 0 0 1 5.678 4.057 4.001 4.001 0 0 1 2.31 6.603c-.01.058-.025.117-.045.174l-.035.085-2.464 5.338a3 3 0 0 1-2.53 1.737L14.72 21H9.28a3 3 0 0 1-2.637-1.57l-.087-.173-2.464-5.338a1.002 1.002 0 0 1-.08-.259 4.001 4.001 0 0 1 2.31-6.603A6.002 6.002 0 0 1 12 3m5 12H7c-.077 0-.045.182.05.462l.097.263.189.46.222.503.31.672.504 1.06a1 1 0 0 0 .908.58h5.44a1 1 0 0 0 .908-.58l.658-1.391.232-.51.146-.334.131-.314.11-.282c.128-.352.183-.589.095-.589M12 5a4.002 4.002 0 0 0-3.92 3.2 1 1 0 0 1-1.013.801L7 9a2 2 0 0 0-.15 3.995L7 13h10a2 2 0 0 0 .15-3.995L17 9l-.067.001a1 1 0 0 1-1.013-.8A4.002 4.002 0 0 0 12 5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CupcakeLine'

/**
 * MingCute Icon: Cupcake Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CupcakeLine = memo(Icon)
