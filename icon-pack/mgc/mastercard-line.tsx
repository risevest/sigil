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
          d="M12 17.978a6.5 6.5 0 1 1 0-10.956 6.5 6.5 0 1 1 0 10.956M4 12.5a4.5 4.5 0 0 1 6.429-4.067A6.473 6.473 0 0 0 9 12.5c0 1.54.535 2.953 1.429 4.067A4.5 4.5 0 0 1 4 12.5m9.571-4.067a4.5 4.5 0 1 1 0 8.133A6.472 6.472 0 0 0 15 12.5c0-1.54-.535-2.953-1.429-4.067M12 9.671c.625.773 1 1.757 1 2.829a4.481 4.481 0 0 1-1 2.829 4.481 4.481 0 0 1-1-2.829c0-1.072.375-2.056 1-2.829"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MastercardLine'

/**
 * MingCute Icon: Mastercard Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MastercardLine = memo(Icon)
