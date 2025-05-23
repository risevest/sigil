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
          d="M12.54 2c2.805 0 5.039 2.01 5.544 4.547 1.879.964 3.037 3.077 2.647 5.307l-.046.231-.048.217a6 6 0 0 1-5.61 4.693L14.78 17h-1.453l-.517 3.309a2 2 0 0 1-1.813 1.684l-.163.007H8.858a2.001 2.001 0 0 1-1.995-1.853L6.858 20h-1.69a2 2 0 0 1-1.993-2.164l.017-.145L5.248 4.537a3 3 0 0 1 2.788-2.532L8.212 2h4.329Zm5.488 6.987-.009.036A6.578 6.578 0 0 1 11.64 14H9.793l-.78 5h.002l-.157 1h1.976l.517-3.309A2 2 0 0 1 13.327 15h1.453a4 4 0 0 0 3.904-3.132l.049-.217a2.987 2.987 0 0 0-.705-2.664M12.541 4H8.21a1 1 0 0 0-.964.736l-.023.11L5.168 18h1.976l.673-4.309a2 2 0 0 1 1.814-1.684L9.793 12h1.846c2.1 0 3.93-1.428 4.44-3.463a3.648 3.648 0 0 0-3.352-4.532L12.54 4Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'PaypalLine'

/**
 * MingCute Icon: Paypal Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const PaypalLine = memo(Icon)
