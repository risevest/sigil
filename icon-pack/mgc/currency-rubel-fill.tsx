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
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m1.5 4H10a1 1 0 0 0-.993.883L9 7v4h-.5a1 1 0 0 0-.117 1.993L8.5 13H9v1h-.5a1 1 0 0 0-.117 1.993L8.5 16H9v1a1 1 0 0 0 1.993.117L11 17v-1h2a1 1 0 0 0 .117-1.993L13 14h-2v-1h2.5a3.5 3.5 0 0 0 .192-6.995zm0 2a1.5 1.5 0 0 1 .144 2.993L13.5 11H11V8z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CurrencyRubelFill'

/**
 * MingCute Icon: Currency Rubel Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyRubelFill = memo(Icon)
